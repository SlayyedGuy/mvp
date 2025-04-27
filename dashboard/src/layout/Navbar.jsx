import React from 'react'
import { useAutoWalletConnect } from '../utils/autoWalletConnect'

function Navbar() {
  const { address, isConnected, connectWallet, disconnectWallet } = useAutoWalletConnect()

  return (
    <nav className="bg-darkbg text-white p-4 flex justify-between items-center">
      <div className="font-bold text-xl">Decentralized Cloud</div>
      <div>
        {isConnected ? (
          <button
            onClick={disconnectWallet}
            className="bg-highlight px-4 py-2 rounded-lg hover:bg-opacity-80"
          >
            Disconnect ({address.slice(0, 6)}...{address.slice(-4)})
          </button>
        ) : (
          <button
            onClick={connectWallet}
            className="bg-accent px-4 py-2 rounded-lg hover:bg-opacity-80"
          >
            Connect Wallet
          </button>
        )}
      </div>
    </nav>
  )
}

export default Navbar
