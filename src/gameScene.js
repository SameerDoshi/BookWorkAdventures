class GameScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'GameScene',
            active: true
        });
    }

    create() {
        // Add large red rectangle
        this.add.rectangle(400, 300, 800, 600, 0xff0000);

        // Add large white text
        const text = this.add.text(400, 300, 'GAME MODE', {
            fontSize: '48px',
            fill: '#fff',
            fontFamily: 'Arial'
        });
        Phaser.Display.Align.In.Center(text, this.add.zone(400, 300, 800, 600));
    }

    addLetterToTile(tile) {
        const letter = this.getRandomLetter();
        const text = this.add.text(0, 0, letter, {
            fontSize: '24px',
            color: '#fff'
        });
        Phaser.Display.Align.In.Center(text, tile);
        tile.letter = letter;
        tile.text = text;
    }

    getRandomLetter() {
        const { TILE_TYPES, TILE_PROBABILITIES } = GAME_CONFIG;
        const random = Math.random();
        let sum = 0;
        
        for (const letter of TILE_TYPES) {
            sum += TILE_PROBABILITIES[letter];
            if (random <= sum) {
                return letter;
            }
        }
        return TILE_TYPES[Math.floor(Math.random() * TILE_TYPES.length)];
    }

    selectTile(tile) {
        if (this.selectedTiles.length === 0) {
            this.selectedTiles.push(tile);
            tile.setTint(0xff0000);
        } else if (this.selectedTiles[this.selectedTiles.length - 1] === tile) {
            this.deselectTile();
        } else {
            const lastTile = this.selectedTiles[this.selectedTiles.length - 1];
            if (this.isAdjacent(tile, lastTile)) {
                this.selectedTiles.push(tile);
                tile.setTint(0xff0000);
            }
        }
    }

    isAdjacent(tile1, tile2) {
        const { GRID_SIZE, TILE_SIZE } = GAME_CONFIG;
        const x1 = Math.floor(tile1.x / TILE_SIZE);
        const y1 = Math.floor(tile1.y / TILE_SIZE);
        const x2 = Math.floor(tile2.x / TILE_SIZE);
        const y2 = Math.floor(tile2.y / TILE_SIZE);
        
        return Math.abs(x1 - x2) + Math.abs(y1 - y2) === 1;
    }

    deselectTile() {
        if (this.selectedTiles.length > 0) {
            const tile = this.selectedTiles.pop();
            tile.clearTint();
        }
    }

    handleKeyPress(event) {
        if (event.key === 'Enter' && this.selectedTiles.length >= 3) {
            this.checkWord();
        }
    }

    checkWord() {
        const word = this.selectedTiles.map(tile => tile.letter).join('');
        const isValid = this.validateWord(word);
        
        if (isValid) {
            this.score += this.calculateScore(word.length);
            this.updateScore();
            this.clearSelectedTiles();
            this.refillGrid();
        } else {
            this.shakeTiles();
            this.clearSelectedTiles();
        }
    }

    validateWord(word) {
        // Simple word validation (can be replaced with a dictionary check)
        return /^[A-Z]+$/.test(word);
    }

    calculateScore(wordLength) {
        return wordLength * GAME_CONFIG.SCORE_MULTIPLIERS[wordLength];
    }

    updateScore() {
        this.scoreText.setText(`Score: ${this.score}`);
    }

    clearSelectedTiles() {
        this.selectedTiles.forEach(tile => tile.clearTint());
        this.selectedTiles = [];
    }

    refillGrid() {
        // Implementation for refilling grid after word is formed
    }

    shakeTiles() {
        // Implementation for shaking tiles when invalid word
    }

    createUI() {
        this.scoreText = this.add.text(10, 10, 'Score: 0', {
            fontSize: '24px',
            color: '#fff'
        });
    }
}

export default GameScene;
