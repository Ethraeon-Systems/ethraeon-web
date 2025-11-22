import Link from 'next/link';
import { Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const emails = [
    { address: 'hello@ethraeon.systems', label: 'General Inquiries' },
    { address: 'contact@ethraeon.systems', label: 'Contact' },
    { address: 'legal@ethraeon.systems', label: 'Legal' },
    { address: 'accessibility@ethraeon.systems', label: 'Accessibility' },
    { address: 'research@ethraeon.systems', label: 'Research' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="text-xl font-bold text-white">ETHRAEON</span>
            </div>
            <p className="text-sm text-gray-400 max-w-md mb-4">
              Constitutional AI framework for governance-first, accountable orchestration
            </p>
            <p className="text-sm font-medium text-blue-400">
              Humanitas ante Machinam
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Humanity before the Machine
            </p>
          </div>

          {/* Contact Emails */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {emails.map((email) => (
                <a
                  key={email.address}
                  href={`mailto:${email.address}`}
                  className="flex items-start space-x-2 text-sm hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 flex-shrink-0 mt-0.5 text-gray-500 group-hover:text-blue-400" />
                  <div>
                    <div className="font-medium text-gray-400 group-hover:text-white">
                      {email.label}
                    </div>
                    <div className="text-gray-500 text-xs">
                      {email.address}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-gray-400 text-center sm:text-left">
              <p>© {currentYear} Ethraeon Systems. All rights reserved.</p>
              <p className="mt-1">ingombrante® | Constitutional AI Technology</p>
            </div>
            <div className="text-sm text-gray-500 italic text-center sm:text-right">
              Humanitas ante Machinam — Humanity before the Machine
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
