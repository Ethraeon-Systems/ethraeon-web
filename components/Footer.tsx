import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="text-xl font-bold text-white">ETHRAEON</span>
            </div>
            <p className="text-sm text-gray-400 max-w-md">
              Constitutional AI framework powering ethical, transparent, and human-aligned artificial intelligence systems.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="mailto:contact@ethraeon.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/overview" className="text-sm hover:text-white transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/blueprint" className="text-sm hover:text-white transition-colors">
                  Blueprint
                </Link>
              </li>
              <li>
                <Link href="/demos" className="text-sm hover:text-white transition-colors">
                  Demos
                </Link>
              </li>
              <li>
                <Link href="/use-cases" className="text-sm hover:text-white transition-colors">
                  Use Cases
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/investors" className="text-sm hover:text-white transition-colors">
                  Investors
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-sm hover:text-white transition-colors">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400 text-center">
          <p>© {currentYear} Ethraeon Systems. All rights reserved. | ingombrante© | Constitutional AI Technology</p>
        </div>
      </div>
    </footer>
  );
}
