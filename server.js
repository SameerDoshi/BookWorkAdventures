const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// Enable CORS
app.use(cors());

// Serve static files with correct MIME types
app.use(express.static(path.join(__dirname, 'src'), {
    setHeaders: (res, path) => {
        const ext = path.split('.').pop().toLowerCase();
        if (ext === 'js') {
            res.setHeader('Content-Type', 'application/javascript');
        }
    }
}));

// Serve index.html from root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve other static files from root
app.use(express.static(__dirname));

// Serve index.html for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve other routes as static files first, then fall back to index.html
app.get('*', (req, res) => {
    const filePath = path.join(__dirname, req.path);
    
    // First try to serve the file directly
    res.sendFile(filePath, (err) => {
        if (err) {
            // If not found, serve index.html
            res.sendFile(path.join(__dirname, 'index.html'));
        }
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
