const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const readline = require('readline');

const NOAUDIOANSWER = 'No puedo escuchar audios en este momento. [RICCI - BOT]';
const REJECTCALLS = true;

const client = new Client();

client.on('qr', (qr) => {
  console.log('scan on your WhatsApp.');
  qrcode.generate(qr, { small: true });
});

client.on('authenticated', () => {
  console.log('AUTHENTICATED');
});

client.on('auth_failure', (msg) => {
  console.error('AUTHENTICATION FAILURE', msg);
});

client.on('ready', () => {
  console.log('READY');
});

client.on('message', (msg) => {
  const { type, from, isGroupMsg } = msg;
  const author = from.split('@')[0];
  if (type === 'chat' && !isGroupMsg) {
    console.log(`MESSAGE RECEIVED [${author}]: ${msg.body}`);
  }
  if (type === 'ptt' && !isGroupMsg && antiaudioEnabled) {
    console.log(`AUDIO MESSAGE [${author}]`);
    // eslint-disable-next-line no-underscore-dangle
    const { waveform } = msg._data;
    if (waveform) {
      try {
        msg.reply(NOAUDIOANSWER);
      } catch (error) {
        console.log('Error trying to response message.');
      }
    }
  }
});

client.on('call', async (call) => {
  if (REJECTCALLS) await call.reject();
  try {
    await client.sendMessage(
      call.from,
      `[${call.fromMe ? 'Outgoing' : 'Incoming'}] Phone call from ${
        call.from
      }, type ${call.isGroup ? 'group' : ''} ${
        call.isVideo ? 'video' : 'audio'
      } call. ${REJECTCALLS ? 'This call was automatically declined.' : ''}`,
    );
  } catch (error) {
    console.log('Error trying to response message.');
  }
});

client.on('disconnected', (reason) => {
  console.log('Client was logged out', reason);
});

client.initialize();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let antiaudioEnabled = true;

rl.on('line', (input) => {
  const command = input.trim().toLowerCase();

  if (command === 'enable antiaudio') {
    antiaudioEnabled = true;
    console.log('Antiaudio has been enabled.');
  } else if (command === 'disable antiaudio') {
    antiaudioEnabled = false;
    console.log('Antiaudio has been disabled.');
  } else {
    console.log(`Command "${command}" not recognized. Try "enable antiaudio" or "disable antiaudio".`);
  }
});

client.on("ready" , (e) => {
console.log("client ready");
  
})