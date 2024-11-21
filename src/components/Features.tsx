import { DollarSign, Globe, LineChart, Lock, Users, Wallet } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <DollarSign className="h-6 w-6 text-blue-600" />,
      title: "Competitive Rates",
      description: "Lower transaction fees compared to traditional banking systems"
    },
    {
      icon: <Globe className="h-6 w-6 text-blue-600" />,
      title: "Global Payments",
      description: "Send payments worldwide without international transfer fees"
    },
    {
      icon: <Lock className="h-6 w-6 text-blue-600" />,
      title: "Secure Infrastructure",
      description: "Enterprise-grade security with multi-signature support"
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "Team Management",
      description: "Granular control over payment permissions and roles"
    },
    {
      icon: <LineChart className="h-6 w-6 text-blue-600" />,
      title: "Analytics Dashboard",
      description: "Real-time tracking and reporting of all transactions"
    },
    {
      icon: <Wallet className="h-6 w-6 text-blue-600" />,
      title: "Multiple Stablecoins",
      description: "Support for USDC, USDT, and other major stablecoins"
    }
  ];

  return (
    <div id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Enterprise Features
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Everything you need to manage B2B payments efficiently and securely
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-blue-50 rounded-full">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}