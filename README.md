# **ℭ𝔜𝔅𝔈ℜ_𝔅𝔒𝔗 – Session Generator**  
*by JJJ DEV*

[![Get Pair Code](https://img.shields.io/badge/🔐%20Get%20Your%20Pair%20Code-Click%20Here-00FFAA?style=for-the-badge)](https://knight-bot-paircode.onrender.com)  
[![QR Code Login](https://img.shields.io/badge/📱%20QR%20Code%20Login-Tap%20Here-00FFAA?style=for-the-badge)](https://knight-bot-paircode.onrender.com)

---

### 📦 What is this?  
This is the official **session generator** for **ℭ𝔜𝔅𝔈ℜ_𝔅𝔒𝔗** – a modern, multi‑device WhatsApp bot.  
Use it to securely link your WhatsApp account and receive your `creds.json` file (session credentials) directly on your phone.

> **⚠️ Never share your `creds.json` with anyone.**  
> It gives full access to your WhatsApp account.

---

### 🚀 Quick Start (2 minutes)

#### 1. Create a MEGA.nz account  
[![MEGA - Create Account](https://img.shields.io/badge/MEGA-Create%20Account-red?logo=mega&logoColor=white)](https://mega.nz)  
*(You only need MEGA if you plan to host the bot yourself – for cloud storage of the session file.)*

#### 2. Paste your MEGA credentials in `mega.js`  
Open `mega.js` and update the `email` and `password`:

```js
// mega.js
const auth = {
  email: 'your-email@domain.com',
  password: 'your-strong-password',
  userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246'
};
