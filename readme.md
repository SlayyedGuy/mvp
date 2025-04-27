# 🌐 Most Valuable Peer (MVP)

A fully decentralized, peer-to-peer (P2P) file sharing and storage system.  
Powered by blockchain, token economics, and community-hosted storage nodes.

> ⚡ **Upload Files. Earn Tokens. Share Space. Stay Free.**

---

![Decentralized Storage Cloud Banner](https://placehold.co/1200x400?text=Decentralized+Storage+Cloud) <!-- replace with real banner later -->

---

## ✨ Features

- 📂 **Drag & Drop File Upload**
- ⚡ **Earn Token Rewards** for sharing storage
- 🧠 **Fully Peer-to-Peer** (No central server)
- 🌙 **Dark Mode UI**
- 🦊 **MetaMask Wallet Connect**
- 🔥 **Live Animated Dashboard**
- 📈 **Storage Usage Charts**
- 🔔 **Success/Error Notifications**
- 🔒 **Open Source & Non-profit**

---

## 🛠️ Technologies Used

| Frontend                 | Backend           | Blockchain                       |
| :----------------------- | :---------------- | :------------------------------- |
| Next.js 14               | Node.js + Express | Wallet Connect (Polygon Testnet) |
| Tailwind CSS             | REST APIs         | Token system (ERC-20 or similar) |
| Wagmi Hooks              |                   |                                  |
| Recharts + Framer Motion |                   |                                  |
| React Hot Toast          |                   |                                  |

---

## 🚀 Local Development

Follow these steps to run everything locally.

---

### 📦 1. Clone the repository

```bash
git clone https://github.com/SlayyedGuy/mvp
cd mvp
```

---

### 🔥 2. Install frontend dependencies

```bash
npm install
```

---

### 🛠️ 3. Install backend dependencies

```bash
cd client
npm install
cd ..
```

---

### 🧠 4. Start Backend Server

```bash
npm run server
```

(Server running at `http://localhost:3001`)

---

### 🎨 5. Start Frontend (Next.js)

```bash
npm run dev
```

(Frontend running at `http://localhost:3000`)

---

### ✅ Your MVP is now live locally!

- Connect your MetaMask wallet 🦊
- Drag & drop to upload files 📂
- Earn tokens based on contribution 💰

---

## 📚 Project Structure

```
/blockchain
    /contracts
        StorageToken.sol             # ERC-20 token smart contract
    /scripts
        deploy_contract.js           # Deploy token contract
        submit_proof.js              # Submit proof to smart contract
    /config
        polygon_mumbai_config.json   # Network and wallet settings
    README.md                        # Blockchain deployment instructions

/client
    /core
        p2p_manager.js                # Peer-to-peer network connection
        storage_manager.js            # Encrypt/store/manage file chunks
        uptime_tracker.js             # Track GB-hours of uptime
        proof_manager.js              # Handle manual proof of storage
    /blockchain
        wallet.js                     # Manage user keys and wallet
        contract_api.js               # Smart contract interactions
    /encryption
        encryptor.js                  # Encrypt/decrypt file chunks
        splitter.js                   # Split/join files into chunks
    /api
        server.js                     # Local Node API (REST)
    /utils
        logger.js                     # Centralized logging
        config.js                     # Node settings loader/saver
    app.js                            # Main NodeJS entry point
    README.md                         # Node setup instructions

/dashboard
    /src
        /components
            StorageTable.jsx          # Files hosted (BitTorrent-style list)
            UploadsTable.jsx           # Upload tracking
            TokenBalanceCard.jsx       # Show token earnings
            PeerStatusBar.jsx          # Node uptime & peers
            ActionButtons.jsx          # Start/Stop Node, Submit Proof
        /pages
            Dashboard.jsx              # Main dashboard view
            Settings.jsx               # Storage limits, encryption
        /layout
            Navbar.jsx                 # Top navigation bar
            Sidebar.jsx                # Side menu
            Footer.jsx                 # Footer information
        /hooks
            useNodeStats.js            # Fetch node status
            useBlockchainStatus.js     # Fetch blockchain status
    /assets
        logo.png                       # Minimalist logo
    /public
        index.html                     # Main HTML shell
    tailwind.config.js                 # Tailwind CSS config
    vite.config.js                     # Vite.js build config
    package.json                       # Dashboard dependencies
    README.md                          # Dashboard setup guide

/docs
    architecture_diagram.png           # System architecture
    tokenomics.md                       # Token earning system
    whitepaper.md                       # Technical whitepaper
    api_spec.md                         # Local Node API specs

LICENSE                                # MIT open-source license
README.md                              # Overall project README
.gitignore                             # Ignore node_modules, .env, builds

```

---

## 🌐 Live Demo (optional)

> 🚀 Hosted soon on Vercel / Netlify (coming...)

---

## 📜 License

This project is **free** and open-sourced under the MIT License.

---

## 🤝 Support

If you like this project, star ⭐ the repo!  
Pull Requests & Contributions are very welcome.

---

## 🚀 Future Roadmap

- ⛓️ Smart Contracts deployment (ERC-20 tokens)
- 🛡️ File encryption before upload
- 🏆 Community leaderboard
- 🌎 Global node reputation system
- 📈 Token staking for extra storage

---

# 👑 Credits

Built with ❤️ by [SlayyedGuy](https://github.com/SlayyedGuy)

---

# 🔥 Badges (optional for top styling)

```markdown
![Next.js](https://img.shields.io/badge/Next.js-14-blue?style=flat-square&logo=next.js)
![Node.js](https://img.shields.io/badge/Node.js-Server-green?style=flat-square&logo=node.js)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Powered By](https://img.shields.io/badge/Powered%20By-Blockchain-blueviolet)
```

---
