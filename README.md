# Monad Together Chat

A real-time collaborative chat application with **tip system** built with **MultiSynq** and **React**, featuring **MetaMask** wallet integration on the **Monad Testnet**.

<img width="887" height="904" alt="image" src="https://github.com/user-attachments/assets/e0a12324-35bb-463d-8651-0b73f9cec3ae" />


## Features

- 🔗 **Real-time Global Chat** - All users share the same synchronized chat session
- 💰 **MetaMask Integration** - Connect with Monad Testnet wallets
- 👥 **User Profiles** - See connected users with wallet addresses
- 💸 **Tip System** - Send MON tips to other users (UI ready)
- 🎨 **Modern UI** - Beautiful interface with Tailwind CSS
- ⚡ **MultiSynq Powered** - Client-side synchronized architecture

## Quick Start

### Local Development
1. **Clone the repository**: `git clone <your-repo-url>`
2. **Copy environment variables**: `cp .env.example .env` and add your API keys
3. **Install dependencies**: `npm install`
4. **Start dev server**: `npm run dev`
5. **Install MetaMask**: Make sure you have MetaMask browser extension installed
6. **Connect Wallet**: Click "Connect Wallet" to join the chat
7. **Start Chatting**: Send messages and see real-time updates from other users


## Technology Stack

- **Frontend**: React 18 with Hooks
- **Styling**: Tailwind CSS
- **Real-time Sync**: MultiSynq client-side architecture
- **Blockchain**: Monad Testnet integration via MetaMask
- **Build**: Babel for JSX transformation

## Architecture

### MultiSynq Model-View Pattern
- **ChatModel**: Handles synchronized state (messages, user profiles)
- **React Components**: Handle UI and user interactions
- **Polling Sync**: React polls model state every 100ms for real-time updates

### Session Management
- **Global Session**: All users join the same session (`monad-global-chat`)
- **Synchronized State**: Messages and user profiles sync across all clients
- **Deterministic**: All users see identical state and behavior

## Configuration

### Monad Testnet
- **Chain ID**: 10143 (0x279F)
- **RPC URL**: https://testnet-rpc.monad.xyz
- **Explorer**: https://testnet.monadexplorer.com
- **Currency**: MON

### MultiSynq
- **API Key**: Configured for `io.multisynq.monad.chat`
- **Session**: `monad-global-chat`
- **Password**: `monad2024`

## File Structure

```
/
├── react-app.html          # Main application file
├── README.md              # This file
├── backup/                # Backup files
│   ├── index.html
│   └── metamask-test.html
└── index.html            # Original version
```

## Development Notes

- **No Build Process**: Single HTML file with inline React and Babel
- **CDN Dependencies**: All libraries loaded from CDN
- **Real-time Updates**: 100ms polling for smooth user experience
- **Error Handling**: Comprehensive MetaMask and MultiSynq error handling

## Browser Support

- Chrome/Chromium (recommended)
- Firefox
- Safari
- Edge

*Requires MetaMask extension for wallet functionality*

## Deployment

### Environment Variables
Copy `.env.example` to `.env` and configure:
- `VITE_MULTISYNQ_API_KEY`: Your MultiSynq API key from [multisynq.io/coder](https://multisynq.io/coder)
- `VITE_MULTISYNQ_APP_ID`: Application identifier
- `VITE_SESSION_NAME`: Global session name
- `VITE_SESSION_PASSWORD`: Session password



**Built with ❤️ using MultiSynq, React, and Monad Testnet**
