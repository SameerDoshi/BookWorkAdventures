# BookWork Adventures

This is my attempt at recreating the Bookworm Adventures game using Phaser.js, inspired by the Vibecoding tutorial series.

## About

BookWork Adventures is a word-based puzzle game where players solve word puzzles while fighting monsters. This project is a work in progress and aims to capture the essence of the original game while adding modern features and improvements.

## Features

- Bouncing ball game mechanic
- Start screen with background and buttons
- Sound effects and background music
- Responsive game canvas
- Clean and modern UI design

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/SameerDoshi/BookWorkAdventures.git
cd BookWorkAdventures
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
BookWorkAdventures/
├── src/
│   ├── scenes/
│   │   ├── StartScreen.js
│   │   ├── BouncingBall.js
│   │   └── GameMode.js
│   ├── config.js
│   └── constants.js
├── assets/
│   └── sounds/
│       ├── background.mp3
│       └── click.mp3
├── styles.css
├── index.html
└── main.js
```

## Development

The project uses Phaser.js for game development and follows a modular structure with separate scenes for different game states.

### Available Scripts

- `npm start`: Runs the development server
- `npm test`: Runs tests (coming soon)
- `npm run build`: Builds the production version (coming soon)

## License

This project is for educational purposes only and is not affiliated with the original Bookworm Adventures game.

## Acknowledgments

- Inspired by the Vibecoding tutorial series
- Built with Phaser.js
