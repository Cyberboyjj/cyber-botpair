import express from 'express';
import fs from 'fs';
import pino from 'pino';
import {
    makeWASocket,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers,
    jidNormalizedUser,
    fetchLatestBaileysVersion
} from '@whiskeysockets/baileys';
import pn from 'awesome-phonenumber';

const router = express.Router();

// Helper to remove session folder
function removeFile(filePath) {
    try {
        if (!fs.existsSync(filePath)) return false;
        fs.rmSync(filePath, { recursive: true, force: true });
        console.log(`🧹 Removed session: ${filePath}`);
    } catch (e) {
        console.error('❌ Error removing file:', e);
    }
}

router.get('/', async (req, res) => {
    let num = req.query.number;
    if (!num) {
        return res.status(400).json({ code: 'Missing phone number' });
    }

    // Use number as folder name (sanitized)
    const sessionDir = `./${num.replace(/[^0-9]/g, '')}`;

    // Remove any existing session for this number
    await removeFile(sessionDir);

    // Clean number and validate
    num = num.replace(/[^0-9]/g, '');
    const phone = pn('+' + num);
    if (!phone.isValid()) {
        return res.status(400).json({
            code: 'Invalid phone number. Use international format without + or spaces (e.g., 2349065296638)'
        });
    }
    num = phone.getNumber('e164').replace('+', '');

    async function initiateSession() {
        const { state, saveCreds } = await useMultiFileAuthState(sessionDir);

        try {
            const { version } = await fetchLatestBaileysVersion();
            const cyberBot = makeWASocket({
                version,
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({ level: 'fatal' }).child({ level: 'fatal' }))
                },
                printQRInTerminal: false,
                logger: pino({ level: 'fatal' }).child({ level: 'fatal' }),
                browser: Browsers.windows('Chrome'),
                markOnlineOnConnect: false,
                generateHighQualityLinkPreview: false,
                defaultQueryTimeoutMs: 60000,
                connectTimeoutMs: 60000,
                keepAliveIntervalMs: 30000,
                retryRequestDelayMs: 250,
                maxRetries: 5
            });

            cyberBot.ev.on('connection.update', async (update) => {
                const { connection, lastDisconnect, isNewLogin, isOnline } = update;

                if (connection === 'open') {
                    console.log('✅ ℭ𝔜𝔅𝔈ℜ_𝔅𝔒𝔗 connected successfully!');
                    console.log('📤 Sending session file to user...');

                    try {
                        const credsFile = fs.readFileSync(`${sessionDir}/creds.json`);
                        const userJid = jidNormalizedUser(`${num}@s.whatsapp.net`);

                        // Send creds.json
                        await cyberBot.sendMessage(userJid, {
                            document: credsFile,
                            mimetype: 'application/json',
                            fileName: 'creds.json'
                        });
                        console.log('📄 creds.json sent');

                        // Send setup guide (image + caption)
                        await cyberBot.sendMessage(userJid, {
                            image: { url: 'https://drive.google.com/file/d/1J0XGXkHAIS3hvuCIFt-1t8iCdE2c1t3k/view?usp=sharing' },
                            caption: `🎬 *ℭ𝔜𝔅𝔈ℜ_𝔅𝔒𝔗 Full Setup Guide!*\n\n🚀 Bug fixes + new commands + fast AI chat\n📺 Watch: https://jjokpanachi.vercel.app`
                        });
                        console.log('🎬 Setup guide sent');

                        // Warning message
                        await cyberBot.sendMessage(userJid, {
                            text: `⚠️ *DO NOT SHARE THIS FILE WITH ANYONE* ⚠️\n\n┌┤✑ Thanks for using ℭ𝔜𝔅𝔈ℜ_𝔅𝔒𝔗\n│└────────────┈ ⳹\n│© 2027 JJJ DEV\n└─────────────────┈ ⳹`
                        });
                        console.log('⚠️ Warning message sent');

                        // Cleanup session
                        console.log('🧹 Cleaning session...');
                        await delay(1000);
                        removeFile(sessionDir);
                        console.log('✅ Session cleaned. Process complete.');
                    } catch (err) {
                        console.error('❌ Error sending files/messages:', err);
                        removeFile(sessionDir);
                    }
                }

                if (isNewLogin) console.log('🔐 New login via pair code');
                if (isOnline) console.log('📶 Bot is online');

                if (connection === 'close') {
                    const statusCode = lastDisconnect?.error?.output?.statusCode;
                    if (statusCode === 401) {
                        console.log('❌ Logged out – need new pair code');
                    } else {
                        console.log('🔁 Connection closed, restarting session...');
                        initiateSession();
                    }
                }
            });

            // Request pairing code if not registered
            if (!cyberBot.authState.creds.registered) {
                await delay(3000);
                let cleanNum = num.replace(/[^\d+]/g, '');
                if (cleanNum.startsWith('+')) cleanNum = cleanNum.substring(1);

                try {
                    let pairCode = await cyberBot.requestPairingCode(cleanNum);
                    pairCode = pairCode?.match(/.{1,4}/g)?.join('-') || pairCode;
                    if (!res.headersSent) {
                        console.log(`📱 Pairing code for ${num}: ${pairCode}`);
                        return res.json({ code: pairCode });
                    }
                } catch (err) {
                    console.error('❌ Pairing code error:', err);
                    if (!res.headersSent) {
                        return res.status(503).json({ code: 'Failed to get pairing code. Check number and try again.' });
                    }
                }
            }

            cyberBot.ev.on('creds.update', saveCreds);
        } catch (err) {
            console.error('❌ Session init error:', err);
            if (!res.headersSent) {
                return res.status(503).json({ code: 'Service Unavailable' });
            }
        }
    }

    await initiateSession();
});

// Global exception handler (silence known Baileys noise)
process.on('uncaughtException', (err) => {
    const msg = String(err);
    const ignored = [
        'conflict', 'not-authorized', 'Socket connection timeout', 'rate-overlimit',
        'Connection Closed', 'Timed Out', 'Value not found', 'Stream Errored',
        'statusCode: 515', 'statusCode: 503'
    ];
    if (ignored.some(i => msg.includes(i))) return;
    console.error('💥 Uncaught exception:', err);
});

export default router;
