import { ethers } from 'ethers';

declare global {
  interface Window {
    ethereum?: any;
  }
}

export async function connectWallet() {
  if (typeof window.ethereum !== 'undefined') {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      return signer;
    } catch (error) {
      console.error('User rejected connection:', error);
      throw error;
    }
  } else {
    window.open('https://trustwallet.com', '_blank');
    throw new Error('Please install TrustWallet');
  }
}

export async function sendTransaction(to: string, amount: string) {
  try {
    const signer = await connectWallet();
    const tx = await signer.sendTransaction({
      to,
      value: ethers.parseEther(amount)
    });
    await tx.wait(); // Wait for transaction confirmation
    return tx;
  } catch (error) {
    console.error('Transaction failed:', error);
    throw error;
  }
}