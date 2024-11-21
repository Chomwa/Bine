import { CreditCard, ArrowUpRight, ArrowDownRight, Users } from 'lucide-react';
import TransactionChart from '../components/TransactionChart';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Balance</p>
              <p className="text-2xl font-semibold">$124,250.89</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-full">
              <CreditCard className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Monthly Inflow</p>
              <p className="text-2xl font-semibold text-green-600">+$12,234.12</p>
            </div>
            <div className="p-3 bg-green-50 rounded-full">
              <ArrowUpRight className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Monthly Outflow</p>
              <p className="text-2xl font-semibold text-red-600">-$8,234.12</p>
            </div>
            <div className="p-3 bg-red-50 rounded-full">
              <ArrowDownRight className="h-6 w-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Active Partners</p>
              <p className="text-2xl font-semibold">24</p>
            </div>
            <div className="p-3 bg-purple-50 rounded-full">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Transaction Chart */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Transaction Volume</h2>
        <TransactionChart />
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Recent Transactions</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="p-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium">CP</span>
                </div>
                <div>
                  <p className="font-medium">Company {String.fromCharCode(65 + i)}</p>
                  <p className="text-sm text-gray-500">Mar {10 + i}, 2024</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-medium ${i % 2 === 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {i % 2 === 0 ? '+' : '-'}$1,{234 + i * 100}.00
                </p>
                <p className="text-sm text-gray-500">USDC</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}