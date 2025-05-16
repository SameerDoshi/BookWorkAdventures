const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

// Create pixel art worm character
function createWormCharacter() {
    canvas.width = 32;
    canvas.height = 32;
    
    // Body
    ctx.fillStyle = '#4CAF50'; // Green body
    ctx.fillRect(8, 8, 16, 16);
    
    // Head
    ctx.fillStyle = '#388E3C'; // Darker green head
    ctx.fillRect(12, 4, 8, 4);
    
    // Eyes
    ctx.fillStyle = '#fff'; // White eyes
    ctx.fillRect(14, 6, 2, 2);
    ctx.fillRect(18, 6, 2, 2);
    
    // Pupils
    ctx.fillStyle = '#000';
    ctx.fillRect(14, 7, 1, 1);
    ctx.fillRect(18, 7, 1, 1);
    
    // Glasses
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(12, 8);
    ctx.lineTo(20, 8);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(15, 7, 2, 0, Math.PI * 2);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(19, 7, 2, 0, Math.PI * 2);
    ctx.stroke();
    
    // Save worm character
    const wormData = canvas.toDataURL('image/png');
    const wormBlob = dataURLToBlob(wormData);
    saveAs(wormBlob, 'assets/worm-character.png');
}

// Create pixel art book
function createBook() {
    canvas.width = 32;
    canvas.height = 48;
    
    // Book cover
    ctx.fillStyle = '#A1887F'; // Brown cover
    ctx.fillRect(0, 0, 32, 48);
    
    // Book spine
    ctx.fillStyle = '#795548'; // Darker brown spine
    ctx.fillRect(0, 0, 4, 48);
    
    // Book pages
    ctx.fillStyle = '#fff';
    ctx.fillRect(4, 0, 28, 48);
    
    // Book title
    ctx.fillStyle = '#000';
    ctx.fillRect(6, 10, 24, 4);
    ctx.fillRect(6, 20, 24, 4);
    ctx.fillRect(6, 30, 24, 4);
    
    // Save book
    const bookData = canvas.toDataURL('image/png');
    const bookBlob = dataURLToBlob(bookData);
    saveAs(bookBlob, 'assets/book.png');
}

// Create pixel art background
function createBackground() {
    canvas.width = 800;
    canvas.height = 600;
    
    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, 600);
    gradient.addColorStop(0, '#4CAF50');
    gradient.addColorStop(1, '#388E3C');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 800, 600);
    
    // Add some decorative elements
    ctx.fillStyle = '#fff';
    ctx.font = '16px Arial';
    ctx.fillText('A Vibe Coded Adventure', 300, 550);
    
    // Save background
    const bgData = canvas.toDataURL('image/png');
    const bgBlob = dataURLToBlob(bgData);
    saveAs(bgBlob, 'assets/start-screen-bg.png');
}

// Helper functions
function dataURLToBlob(dataURL) {
    const parts = dataURL.split(';base64,');
    const contentType = parts[0].split(':')[1];
    const raw = window.atob(parts[1]);
    const rawLength = raw.length;
    const uInt8Array = new Uint8Array(rawLength);
    
    for (let i = 0; i < rawLength; i++) {
        uInt8Array[i] = raw.charCodeAt(i);
    }
    
    return new Blob([uInt8Array], { type: contentType });
}

function saveAs(blob, filename) {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
}

// Generate all assets
createWormCharacter();
createBook();
createBackground();
