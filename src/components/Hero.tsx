import { ArrowRight, Shield, Zap, RefreshCw } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Enterprise Stablecoin</span>
            <span className="block text-blue-600">Payment Solutions</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Streamline your B2B payments with secure, instant stablecoin transactions. Save time and money while maintaining complete control over your finances.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm">
            <div className="p-3 bg-blue-100 rounded-full">
              <Shield className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Enterprise Security</h3>
            <p className="mt-2 text-center text-gray-500">
              Bank-grade security with multi-signature wallets and advanced encryption
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm">
            <div className="p-3 bg-blue-100 rounded-full">
              <Zap className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Instant Settlement</h3>
            <p className="mt-2 text-center text-gray-500">
              Real-time payment processing with immediate confirmation
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm">
            <div className="p-3 bg-blue-100 rounded-full">
              <RefreshCw className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Automated Reconciliation</h3>
            <p className="mt-2 text-center text-gray-500">
              Smart contract-powered payment tracking and reporting
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}