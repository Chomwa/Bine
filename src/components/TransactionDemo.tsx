import { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function TransactionDemo() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleTransaction = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);
      setTimeout(() => setIsComplete(false), 3000);
    }, 2000);
  };

  return (
    <div id="transactions" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Lightning-Fast Transactions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Experience the speed of blockchain-powered B2B payments
          </p>
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">From</p>
                      <p className="font-medium">Company A Wallet</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Balance</p>
                      <p className="font-medium">1,000,000 USDC</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">To</p>
                      <p className="font-medium">Company B Wallet</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Amount</p>
                      <p className="font-medium">50,000 USDC</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleTransaction}
                  disabled={isProcessing}
                  className={`w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white ${
                    isProcessing ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
                  } transition-colors`}
                >
                  {isProcessing ? (
                    <span className="flex items-center">
                      Processing...
                      <div className="ml-2 animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    </span>
                  ) : isComplete ? (
                    <span className="flex items-center">
                      Complete
                      <CheckCircle className="ml-2 h-5 w-5" />
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Payment
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </span>
                  )}
                </button>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="text-lg font-medium mb-4">Transaction Details</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Network Fee</span>
                    <span className="font-medium">0.50 USDC</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Processing Time</span>
                    <span className="font-medium">~2 seconds</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Security</span>
                    <span className="font-medium">Multi-sig Required</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}