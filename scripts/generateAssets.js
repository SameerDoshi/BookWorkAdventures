const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

// Create tile.png (64x64)
canvas.width = 64;
canvas.height = 64;

// Draw tile background
ctx.fillStyle = '#4CAF50';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Add subtle border
ctx.strokeStyle = '#388E3C';
ctx.lineWidth = 2;
ctx.strokeRect(0, 0, canvas.width, canvas.height);

// Save tile.png
const tileData = canvas.toDataURL('image/png');
const tileBlob = dataURLToBlob(tileData);
saveAs(tileBlob, 'assets/tile.png');

// Create selected.png (64x64)
canvas.width = 64;
canvas.height = 64;

// Draw selected overlay
ctx.fillStyle = 'rgba(255, 0, 0, 0.3)';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Save selected.png
const selectedData = canvas.toDataURL('image/png');
const selectedBlob = dataURLToBlob(selectedData);
saveAs(selectedBlob, 'assets/selected.png');

// Create letters.png spritesheet (32x32 tiles)
canvas.width = 32;
canvas.height = 32;

// Draw letters
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let row = 0;
let col = 0;

for (let letter of letters) {
    ctx.fillStyle = '#fff';
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(letter, canvas.width / 2, canvas.height / 2);
    
    // Move to next position
    col++;
    if (col >= 8) {
        col = 0;
        row++;
        canvas.height += 32;
    }
}

// Save letters.png
const lettersData = canvas.toDataURL('image/png');
const lettersBlob = dataURLToBlob(lettersData);
saveAs(lettersBlob, 'assets/letters.png');

// Helper function to convert data URL to blob
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

// Helper function to save blob as file
function saveAs(blob, filename) {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
}
