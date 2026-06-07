<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <title>ℭ𝔜𝔅𝔈ℜ_𝔅𝔒𝔗 • Link WhatsApp</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: linear-gradient(145deg, #0b0b0f 0%, #14141c 100%);
      font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, sans-serif;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
    }

    .glass-card {
      max-width: 520px;
      width: 100%;
      background: rgba(20, 20, 30, 0.75);
      backdrop-filter: blur(20px);
      border-radius: 48px;
      padding: 28px 24px 36px;
      box-shadow: 0 25px 45px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.08);
      transition: all 0.3s ease;
    }

    .header {
      text-align: center;
      margin-bottom: 28px;
    }

    .logo-ring {
      width: 84px;
      height: 84px;
      margin: 0 auto 18px;
      background: linear-gradient(135deg, #1a1a2e, #0f0f1a);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 38px;
      color: #ffffff;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.15);
    }

    .title {
      font-size: 28px;
      font-weight: 800;
      letter-spacing: -0.3px;
      background: linear-gradient(120deg, #f0f0ff, #b0b0ff);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      margin-bottom: 6px;
    }

    .subtitle {
      font-size: 14px;
      color: #9ca3af;
      font-weight: 500;
      border-top: 1px dashed rgba(255, 255, 255, 0.15);
      display: inline-block;
      padding-top: 8px;
    }

    .social-icons {
      display: flex;
      justify-content: center;
      gap: 18px;
      margin: 20px 0 24px;
    }

    .social-icons a {
      width: 48px;
      height: 48px;
      border-radius: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      transition: all 0.25s ease;
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(4px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #e0e0ff;
    }

    .social-icons a.youtube { background: #ff0000aa; color: white; }
    .social-icons a.telephone { background: #34b7f1aa; color: white; }
    .social-icons a.whatsapp { background: #25d366aa; color: white; }
    .social-icons a.github { background: #181717aa; color: white; }

    .social-icons a:hover {
      transform: translateY(-4px);
      filter: brightness(1.1);
      box-shadow: 0 6px 14px rgba(0, 0, 0, 0.3);
    }

    /* toggle */
    .toggle-modern {
      display: flex;
      background: rgba(0, 0, 0, 0.45);
      border-radius: 60px;
      padding: 6px;
      margin-bottom: 28px;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .toggle-option {
      flex: 1;
      text-align: center;
      padding: 10px 12px;
      border-radius: 40px;
      font-weight: 600;
      font-size: 15px;
      cursor: pointer;
      transition: 0.2s ease;
      background: transparent;
      color: #bbb;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    .toggle-option.active {
      background: #2c2c3e;
      color: white;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(4px);
    }

    .input-group {
      margin-bottom: 22px;
      transition: 0.2s;
    }

    .input-group.hidden {
      display: none;
    }

    .input-label {
      display: block;
      font-size: 13px;
      font-weight: 500;
      margin-bottom: 8px;
      color: #cfcfef;
      letter-spacing: 0.3px;
    }

    .input-field {
      width: 100%;
      padding: 14px 18px;
      background: rgba(10, 10, 18, 0.8);
      border: 1.5px solid rgba(255, 255, 255, 0.2);
      border-radius: 32px;
      font-size: 16px;
      color: #f0f0ff;
      outline: none;
      transition: 0.2s;
    }

    .input-field:focus {
      border-color: #8b8bff;
      box-shadow: 0 0 0 3px rgba(139, 139, 255, 0.2);
    }

    .generate-btn {
      width: 100%;
      padding: 14px;
      background: linear-gradient(100deg, #2b2b4f, #1e1e34);
      border: none;
      border-radius: 40px;
      font-size: 16px;
      font-weight: 700;
      color: white;
      cursor: pointer;
      margin-bottom: 20px;
      transition: 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      box-shadow: 0 5px 12px rgba(0, 0, 0, 0.3);
    }

    .generate-btn:hover {
      transform: scale(0.98);
      background: linear-gradient(100deg, #3b3b6f, #2a2a48);
    }

    .generate-btn.hidden {
      display: none;
    }

    .code-display {
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(8px);
      border-radius: 60px;
      padding: 16px;
      text-align: center;
      font-weight: 700;
      font-size: 18px;
      letter-spacing: 1px;
      margin-bottom: 18px;
      border: 1px solid rgba(255, 255, 255, 0.15);
      color: #d6d6ff;
    }

    .qr-display {
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(8px);
      border-radius: 36px;
      padding: 24px;
      text-align: center;
      margin-bottom: 18px;
      display: none;
    }

    .qr-image {
      max-width: 260px;
      width: 100%;
      border-radius: 24px;
      background: white;
      padding: 12px;
      margin-bottom: 16px;
    }

    .qr-instructions {
      font-size: 13px;
      color: #bdbde2;
    }

    .copy-btn {
      width: 100%;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.2);
      padding: 12px;
      border-radius: 40px;
      font-weight: 600;
      font-size: 15px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      transition: 0.2s;
      color: #cdcdff;
    }

    .copy-btn:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: #8b8bff;
    }

    .loading {
      text-align: center;
      margin: 16px 0;
      display: none;
    }

    .loading i {
      font-size: 28px;
      color: #a0a0ff;
      animation: spin 1s infinite linear;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .success-message {
      color: #a3ffb0;
      font-weight: 600;
    }
    .error-message {
      color: #ffa8a8;
    }

    .footer {
      text-align: center;
      margin-top: 28px;
      font-size: 11px;
      color: #5f5f8a;
    }
  </style>
</head>
<body>
<div class="glass-card">
  <div class="header">
    <div class="logo-ring"><i class="fas fa-shield-halored"></i></div>
    <h1 class="title">ℭ𝔜𝔅𝔈ℜ_𝔅𝔒𝔗</h1>
    <div class="subtitle">pair • link • secure</div>
  </div>

  <div class="social-icons">
    <a href="javascript:void(0)" class="youtube"><i class="fab fa-youtube"></i></a>
    <a href="tel:09065296638" class="telephone"><i class="fas fa-phone-alt"></i></a>
    <a href="https://whatsapp.com/channel/0029VbC1l5Z4CrfkBufJQm30" target="_blank" class="whatsapp"><i class="fab fa-whatsapp"></i></a>
    <a href="https://github.com/Cyberboyjj/" target="_blank" class="github"><i class="fab fa-github"></i></a>
  </div>

  <!-- Toggle -->
  <div class="toggle-modern">
    <div class="toggle-option active" data-mode="pair"><i class="fas fa-key"></i> Pair Code</div>
    <div class="toggle-option" data-mode="qr"><i class="fas fa-qrcode"></i> QR Code</div>
  </div>

  <div class="input-group" id="inputGroup">
    <label class="input-label">📱 WhatsApp number (with country code)</label>
    <input type="tel" id="mobileNumber" class="input-field" placeholder="+2348123456789" value="+234">
  </div>

  <button class="generate-btn" id="submit"><i class="fas fa-link"></i> Generate Pair Code</button>

  <div class="loading" id="loading"><i class="fas fa-spinner"></i> requesting...</div>

  <div class="code-display" id="codeDisplay">⚡ your code will appear here</div>
  <div class="qr-display" id="qrDisplay">
    <img id="qrImage" class="qr-image" alt="QR Code">
    <div class="qr-instructions" id="qrInstructions">Scan with WhatsApp → Linked Devices</div>
  </div>

  <button class="copy-btn" id="copy"><i class="fas fa-copy"></i> Copy Code</button>
  <div class="footer">© 2027 JJJ DEV • encrypted session • instant pairing</div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.7.2/axios.min.js"></script>
<script>
  let currentMode = 'pair';

  const toggleOptions = document.querySelectorAll('.toggle-option');
  const inputGroup = document.getElementById('inputGroup');
  const submitBtn = document.getElementById('submit');
  const codeDiv = document.getElementById('codeDisplay');
  const qrDiv = document.getElementById('qrDisplay');
  const loading = document.getElementById('loading');
  const qrImage = document.getElementById('qrImage');
  const qrInstructions = document.getElementById('qrInstructions');

  toggleOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      const mode = opt.dataset.mode;
      if (mode === currentMode) return;
      currentMode = mode;
      toggleOptions.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');

      if (mode === 'pair') {
        inputGroup.classList.remove('hidden');
        submitBtn.classList.remove('hidden');
        qrDiv.style.display = 'none';
        codeDiv.style.display = 'flex';
        codeDiv.innerHTML = '⚡ enter number & generate code';
      } else {
        inputGroup.classList.add('hidden');
        submitBtn.classList.add('hidden');
        codeDiv.style.display = 'none';
        generateQRCode();
      }
    });
  });

  async function generateQRCode() {
    loading.style.display = 'block';
    qrDiv.style.display = 'none';
    codeDiv.style.display = 'none';
    try {
      const res = await axios('/qr');
      if (res.data.qr) {
        qrImage.src = res.data.qr;
        qrInstructions.innerHTML = res.data.instructions.join('<br>');
        qrDiv.style.display = 'block';
      } else {
        codeDiv.style.display = 'flex';
        codeDiv.innerHTML = '<span class="error-message"><i class="fas fa-exclamation-triangle"></i> QR failed</span>';
      }
    } catch (err) {
      codeDiv.style.display = 'flex';
      codeDiv.innerHTML = '<span class="error-message"><i class="fas fa-ban"></i> QR error, retry</span>';
    } finally {
      loading.style.display = 'none';
    }
  }

  document.getElementById("submit").addEventListener("click", async (e) => {
    e.preventDefault();
    let rawNumber = document.getElementById("mobileNumber").value.trim();
    if (!rawNumber) {
      codeDiv.innerHTML = '<span class="error-message"><i class="fas fa-exclamation-circle"></i> enter number first</span>';
      codeDiv.style.display = 'flex';
      return;
    }
    const cleanNum = rawNumber.replace(/[^0-9+]/g, '');
    loading.style.display = 'block';
    codeDiv.style.display = 'flex';
    qrDiv.style.display = 'none';
    codeDiv.innerHTML = '⏳ generating pair code...';

    try {
      const response = await axios(`/pair?number=${cleanNum.replace(/[^0-9]/g, '')}`);
      const pairCode = response.data.code;
      if (pairCode && pairCode !== "Service Unavailable") {
        codeDiv.innerHTML = `<span class="success-message"><i class="fas fa-check-circle"></i> CODE: ${pairCode}</span>`;
      } else {
        codeDiv.innerHTML = '<span class="error-message"><i class="fas fa-skull-crosswalk"></i> service unavailable</span>';
      }
    } catch (error) {
      codeDiv.innerHTML = '<span class="error-message"><i class="fas fa-bug"></i> network / server error</span>';
    } finally {
      loading.style.display = 'none';
    }
  });

  function copyCode() {
    const rawText = codeDiv.innerText;
    let codeOnly = rawText.replace('CODE:', '').trim();
    if (codeOnly.includes('your code will appear') || codeOnly.includes('error')) return;
    navigator.clipboard.writeText(codeOnly).then(() => {
      const btn = document.getElementById("copy");
      const oldHtml = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
      setTimeout(() => btn.innerHTML = oldHtml, 1800);
    }).catch(() => alert("manual copy"));
  }
  document.getElementById("copy").onclick = copyCode;
</script>
</body>
</html>
