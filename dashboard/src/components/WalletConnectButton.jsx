import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

export default function WalletConnectButton() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  if (isConnected)
    return (
      <div className="flex space-x-4 items-center">
        <p className="text-green-500">{address.slice(0,6)}...{address.slice(-4)}</p>
        <button 
          onClick={disconnect}
          className="bg-red-500 text-white rounded-lg px-4 py-2"
        >
          Disconnect
        </button>
      </div>
    );

  return (
    <button 
      onClick={() => connect()}
      className="bg-blue-500 text-white rounded-lg px-4 py-2"
    >
      Connect Wallet
    </button>
  );
}
