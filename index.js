import express from 'express';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import path from 'path';

import pairRouter from './pair.js';
import qrRouter from './qr.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 8000;

// Increase max listeners (optional, good for Baileys)
import('events').then(events => {
    events.EventEmitter.defaultMaxListeners = 500;
});

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// Routes
app.get('/', (req, res) => {
    // 👇 Serve your new JJJ DEV styled HTML (make sure the file is named index.html)
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/pair', pairRouter);
app.use('/qr', qrRouter);

// Start server
app.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════╗
║       ℭ𝔜𝔅𝔈ℜ_𝔅𝔒𝔗 - JJJ DEV             ║
║   WhatsApp Pair + QR Service Active    ║
╠════════════════════════════════════════╣
║  🟢 Server running on port ${PORT}        ║
║  🌐 http://localhost:${PORT}              ║
║  📡 /pair  |  /qr  endpoints active     ║
╚════════════════════════════════════════╝
    `);
});

export default app;
