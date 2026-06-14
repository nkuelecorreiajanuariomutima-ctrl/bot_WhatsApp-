# 🤖 Bot WhatsApp com Node.js

Um bot simples e funcional para WhatsApp usando Node.js e whatsapp-web.js.

## 📋 Requisitos

- Node.js 14+
- npm ou yarn
- WhatsApp instalado no celular

## 🚀 Instalação

1. **Clone ou entre no diretório:**
```bash
cd bot
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Configure o arquivo .env** (opcional):
```bash
NODE_ENV=development
BOT_NAME=Bot WhatsApp
```

## ▶️ Executar o Bot

**Modo produção:**
```bash
npm start
```

**Modo desenvolvimento (com auto-reload):**
```bash
npm run dev
```

## 📱 Como usar

1. Execute o bot
2. Escaneie o QR Code com o WhatsApp
3. O bot estará pronto para receber mensagens

## 🎮 Comandos Disponíveis

- `!ping` - Responde com Pong
- `!hora` - Mostra a hora atual
- `!oi` - Saudação
- `!echo [texto]` - Repete o texto
- `!ajuda` - Mostra ajuda

## 📝 Personalizando o Bot

Edite `src/index.js` para adicionar novos comandos ou funcionalidades.

### Exemplo de novo comando:
```javascript
else if (message.body === '!seu_comando') {
  message.reply('Resposta do bot');
}
```

## ⚙️ Estrutura do Projeto

```
bot/
├── src/
│   └── index.js      # Arquivo principal do bot
├── package.json      # Dependências
├── .env              # Variáveis de ambiente
├── .gitignore        # Arquivos ignorados
└── README.md         # Este arquivo
```

## 🔐 Segurança

### ✅ O que é SEGURO:
- **Autenticação local**: Suas credenciais são salvas **apenas no seu computador** em `.wwebjs_auth/`
- **Sem servidor externo**: O bot roda 100% localmente, sem dados enviados para a nuvem
- **Código aberto**: Você pode ver exatamente o que o bot faz
- **Sem acesso ao banco**: O bot só lê/envia mensagens que você autoriza

### ⚠️ Riscos Potenciais e Como Evitar:
1. **Acesso ao computador**
   - 🛡️ Use senha forte do Windows
   - 🛡️ Não deixe o computador destravado

2. **Malware no computador**
   - 🛡️ Use antivírus atualizado
   - 🛡️ Não execute arquivos desconhecidos

3. **Alguém com acesso físico**
   - 🛡️ Delete `.wwebjs_auth/` ao desconectar permanentemente
   - 🛡️ Logout da sessão do WhatsApp Web se tiver suspeita

4. **Compartilhamento de código**
   - 🛡️ Nunca poste a pasta `.wwebjs_auth/` no GitHub
   - 🛡️ `.gitignore` já protege arquivos sensíveis

### 🚨 O que NÃO fazer:
- ❌ Não coloque chaves de API ou senhas no código
- ❌ Não execute o bot em servidor compartilhado
- ❌ Não compartilhe a sessão com outras pessoas
- ❌ Não faça upload da pasta `.wwebjs_auth/` para nuvem pública

### 🔍 Verificação de Segurança:
Para ter certeza de que o bot é seguro, você pode:
1. Ver o código em `src/index.js` - é código aberto
2. Verificar as dependências com: `npm audit`
3. Usar apenas bibliotecas oficiais e confiáveis

### 📌 Resumo:
**O risco é MÍNIMO se você:**
- Manter seu computador seguro
- Não compartilhar a pasta `.wwebjs_auth/`
- Usar apenas em computador pessoal

## 🐛 Troubleshooting

Se o QR Code não aparecer ou o bot não conectar:

1. Verifique se tem Node.js instalado: `node -v`
2. Delete a pasta `.wwebjs_auth/` e `.wwebjs_cache/` e tente novamente
3. Use uma versão mais recente do Chrome/Chromium

## 📚 Documentação

- [whatsapp-web.js](https://docs.wwebjs.dev/)

## 📄 Licença

MIT
