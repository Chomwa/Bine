import { User, Building, Lock, Bell, Globe, CreditCard } from 'lucide-react';

export default function Settings() {
  const sections = [
    {
      icon: User,
      title: 'Profile Settings',
      description: 'Manage your personal information and preferences'
    },
    {
      icon: Building,
      title: 'Company Details',
      description: 'Update your company information and business details'
    },
    {
      icon: Lock,
      title: 'Security',
      description: 'Configure security settings and two-factor authentication'
    },
    {
      icon: Bell,
      title: 'Notifications',
      description: 'Customize your notification preferences'
    },
    {
      icon: Globe,
      title: 'API Access',
      description: 'Manage API keys and webhooks'
    },
    {
      icon: CreditCard,
      title: 'Payment Methods',
      description: 'Add and manage your payment methods'
    }
  ];

  return (
    <div className="max-w-4xl space-y-6">
      <div className="bg-white rounded-lg shadow-sm divide-y divide-gray-200">
        {sections.map((section, index) => {
          const Icon = section.icon;
          return (
            <div key={index} className="p-6 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    {section.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {section.description}
                  </p>
                </div>
                <div className="self-center">
                  <button className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium text-gray-900">
              Danger Zone
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Permanent actions that cannot be undone
            </p>
          </div>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}