import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import toast from 'react-hot-toast'

export function useAutoWalletConnect() {
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({ connector: new MetaMaskConnector() })
  const { disconnect } = useDisconnect()

  async function connectWallet() {
    try {
      await connect()
      toast.success('Wallet connected!')
    } catch (error) {
      toast.error('Connection failed')
      console.error(error)
    }
  }

  async function disconnectWallet() {
    try {
      await disconnect()
      toast.success('Wallet disconnected!')
    } catch (error) {
      toast.error('Disconnect failed')
      console.error(error)
    }
  }

  return { address, isConnected, connectWallet, disconnectWallet }
}
