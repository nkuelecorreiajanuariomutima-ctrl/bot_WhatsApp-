const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
require('dotenv').config();

// Criar cliente WhatsApp
const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  }
});

// Evento: QR Code gerado
client.on('qr', (qr) => {
  console.log('📱 Escaneie este QR Code no WhatsApp:');
  qrcode.generate(qr, { small: true });
});

// Evento: Cliente pronto
client.on('ready', () => {
  console.log('✅ Bot conectado com sucesso!');
});

// Evento: Mensagem recebida
client.on('message', async (message) => {
  console.log(`📨 Mensagem de ${message.from}: ${message.body}`);

  // Comandos do bot
  if (message.body === '!ping') {
    message.reply('🏓 Pong!');
  } 
  else if (message.body === '!hora') {
    const hora = new Date().toLocaleTimeString('pt-BR');
    message.reply(`⏰ A hora atual é: ${hora}`);
  }
  else if (message.body === '!ajuda') {
    message.reply(`🤖 *Comandos disponíveis:*\n\n!ping - Responde com Pong\n!hora - Mostra a hora atual\n!ajuda - Mostra esta mensagem`);
  }
  else if (message.body.startsWith('!echo ')) {
    const texto = message.body.slice(6);
    message.reply(`🔊 ${texto}`);
  }
  else if (message.body === '!oi') {
    message.reply('👋 Olá! Como posso ajudar?');
  }
});

// Evento: Desconectado
client.on('disconnected', (reason) => {
  console.log('❌ Bot desconectado:', reason);
});

// Tratamento de erros
client.on('error', (error) => {
  console.error('❌ Erro:', error);
});

// Iniciar cliente
client.initialize();
