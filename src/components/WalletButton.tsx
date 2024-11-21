import { useState } from 'react';
import { Wallet } from 'lucide-react';
import { connectWallet } from '../lib/wallet';

export default function WalletButton() {
  const [address, setAddress] = useState<string>('');
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = async () => {
    setIsConnecting(true);
    try {
      const signer = await connectWallet();
      const address = await signer.getAddress();
      setAddress(address);
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <button
      onClick={handleConnect}
      disabled={isConnecting}
      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-400"
    >
      <Wallet className="h-5 w-5" />
      <span>
        {isConnecting
          ? 'Connecting...'
          : address
          ? `${address.slice(0, 6)}...${address.slice(-4)}`
          : 'Connect Wallet'}
      </span>
    </button>
  );
}