import pkg from 'whatsapp-web.js';
import QrCode from 'qrcode';

const { Client, LocalAuth } = pkg;

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--unhandled-rejections=strict'],
  },
});

client.on('qr', (qr) => {
  console.log('QR RECEIVED');
  QrCode.toString(qr, { type: 'terminal', small: true }, (err, url) => {
    if (err) {
      console.error(err);
    }
    console.log(url);
  });
});

client.on('loading_screen', (percent, message) => {
  console.log('LOADING SCREEN', percent, message);
});

client.on('authenticated', () => {
  console.log('AUTHENTICATED');
});

client.on('auth_failure', (msg) => {
  // Fired if session restore was unsuccessful
  console.error('AUTHENTICATION FAILURE', msg);
});

client.on('disconnected', () => {
  console.log('disconnected');
});

client.on('ready', () => {
  console.log('Client is ready!');
});

export default client;
