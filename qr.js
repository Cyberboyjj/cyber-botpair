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

function removeFile(filePath) {
    try {
        if (!fs.existsSync(filePath)) return false;
        fs.rmSync(filePath, { recursive: true, force: true });
        console.log(`🧹 [ℭ𝔜𝔅𝔈ℜ_𝔅𝔒𝔗] Removed session: ${filePath}`);
        return true;
    } catch (e) {
        console.error('❌ [ℭ𝔜𝔅𝔈ℜ_𝔅𝔒𝔗] Error removing file:', e);
        return false;
    }
}

router.get('/', async (req, res) => {
    let num = req.query.number;
    if (!num) return res.status(400).json({ code: 'Missing phone number' });

    const sessionDir = `./${num.replace(/[^0-9]/g, '')}`;
    await removeFile(sessionDir);

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
                    console.log('✅ [ℭ𝔜𝔅𝔈ℜ_𝔅𝔒𝔗] Connected successfully!');
                    console.log('📤 [ℭ𝔜𝔅𝔈ℜ_𝔅𝔒𝔗] Sending session file...');

                    try {
                        const credsFile = fs.readFileSync(`${sessionDir}/creds.json`);
                        const userJid = jidNormalizedUser(`${num}@s.whatsapp.net`);

                        await cyberBot.sendMessage(userJid, {
                            document: credsFile,
                            mimetype: 'application/json',
                            fileName: 'creds.json'
                        });
                        console.log('📄 [ℭ𝔜𝔅𝔈ℜ_𝔅𝔒𝔗] creds.json sent');

                        await cyberBot.sendMessage(userJid, {
                            image: { url: 'https://drive.google.com/file/d/1J0XGXkHAIS3hvuCIFt-1t8iCdE2c1t3k/view?usp=sharing' },
                            caption: `🎬 *ℭ𝔜𝔅𝔈ℜ_𝔅𝔒𝔗 Full Setup Guide!*\n\n🚀 Bug fixes + new commands + fast AI chat\n📺 Watch: https://jjokpanachi.vercel.app`
                        });
                        console.log('🎬 [ℭ𝔜𝔅𝔈ℜ_𝔅𝔒𝔗] Setup guide sent');

                        await cyberBot.sendMessage(userJid, {
                            text: `⚠️ *DO NOT SHARE THIS FILE WITH ANYONE* ⚠️\n\n┌┤✑ Thanks for using ℭ𝔜𝔅𝔈ℜ_𝔅𝔒𝔗\n│└────────────┈ ⳹\n│© 2027 JJJ DEV\n└─────────────────┈ ⳹`
                        });
                        console.log('⚠️ [ℭ𝔜𝔅𝔈ℜ_𝔅𝔒𝔗] Warning sent');

                        await delay(1000);
                        removeFile(sessionDir);
                        console.log('✅ [ℭ𝔜𝔅𝔈ℜ_𝔅𝔒𝔗] Session cleaned.');
                    } catch (err) {
                        console.error('❌ [ℭ𝔜𝔅𝔈ℜ_𝔅𝔒𝔗] Error sending files:', err);
                        removeFile(sessionDir);
                    }
                }

                if (isNewLogin) console.log('🔐 [ℭ𝔜𝔅𝔈ℜ_𝔅𝔒𝔗] New login via pair code');
                if (isOnline) console.log('📶 [ℭ𝔜𝔅𝔈ℜ_𝔅𝔒𝔗] Bot online');

                if (connection === 'close') {
                    const statusCode = lastDisconnect?.error?.output?.statusCode;
                    if (statusCode === 401) {
                        console.log('❌ [ℭ𝔜𝔅𝔈ℜ_𝔅𝔒𝔗] Logged out – need new pair code');
                    } else {
                        console.log('🔁 [ℭ𝔜𝔅𝔈ℜ_𝔅𝔒𝔗] Connection closed, restarting...');
                        initiateSession();
                    }
                }
            });

            if (!cyberBot.authState.creds.registered) {
                await delay(3000);
                let cleanNum = num.replace(/[^\d+]/g, '');
                if (cleanNum.startsWith('+')) cleanNum = cleanNum.substring(1);

                try {
                    let pairCode = await cyberBot.requestPairingCode(cleanNum);
                    pairCode = pairCode?.match(/.{1,4}/g)?.join('-') || pairCode;
                    if (!res.headersSent) {
                        console.log(`📱 [ℭ𝔜𝔅𝔈ℜ_𝔅𝔒𝔗] Pairing code for ${num}: ${pairCode}`);
                        return res.json({ code: pairCode });
                    }
                } catch (err) {
                    console.error('❌ [ℭ𝔜𝔅𝔈ℜ_𝔅𝔒𝔗] Pairing code error:', err);
                    if (!res.headersSent) {
                        return res.status(503).json({ code: 'Failed to get pairing code. Check number and try again.' });
                    }
                }
            }

            cyberBot.ev.on('creds.update', saveCreds);
        } catch (err) {
            console.error('❌ [ℭ𝔜𝔅𝔈ℜ_𝔅𝔒𝔗] Session init error:', err);
            if (!res.headersSent) return res.status(503).json({ code: 'Service Unavailable' });
        }
    }

    await initiateSession();
});

process.on('uncaughtException', (err) => {
    const e = String(err);
    const ignored = ['conflict', 'not-authorized', 'Socket connection timeout', 'rate-overlimit',
                     'Connection Closed', 'Timed Out', 'Value not found', 'Stream Errored',
                     'statusCode: 515', 'statusCode: 503'];
    if (ignored.some(i => e.includes(i))) return;
    console.error('💥 [ℭ𝔜𝔅𝔈ℜ_𝔅𝔒𝔗] Uncaught exception:', err);
});

export default router;
