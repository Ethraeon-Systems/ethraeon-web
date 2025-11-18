'use client';

import { Mail, MessageSquare, Calendar, MapPin } from 'lucide-react';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    inquiry: 'demo',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-blue-100">
              Ready to deploy constitutional AI governance? Let's talk about your requirements.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Options */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">General Inquiries</h3>
              <a href="mailto:contact@ethraeon.com" className="text-blue-600 hover:text-blue-700">
                contact@ethraeon.com
              </a>
            </Card>

            <Card className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Press & Media</h3>
              <a href="mailto:press@ethraeon.com" className="text-blue-600 hover:text-blue-700">
                press@ethraeon.com
              </a>
            </Card>

            <Card className="text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Investors</h3>
              <a href="mailto:investors@ethraeon.com" className="text-blue-600 hover:text-blue-700">
                investors@ethraeon.com
              </a>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <Card>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
                  <p className="text-gray-600 mb-8">
                    We've received your inquiry and will respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                        Role
                      </label>
                      <input
                        type="text"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="inquiry" className="block text-sm font-medium text-gray-700 mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      id="inquiry"
                      name="inquiry"
                      required
                      value={formData.inquiry}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="demo">Request Demo</option>
                      <option value="pilot">Pilot Program</option>
                      <option value="enterprise">Enterprise Deployment</option>
                      <option value="partnership">Partnership</option>
                      <option value="investment">Investment Opportunity</option>
                      <option value="press">Press & Media</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your use case, requirements, or inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 transition-colors"
                  >
                    Send Message
                  </button>

                  <p className="text-sm text-gray-600 mt-4">
                    By submitting this form, you agree to our privacy policy. We'll respond within 24 hours.
                  </p>
                </form>
              )}
            </Card>
          </div>
        </Container>
      </section>

      {/* Location Section */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Headquarters</h2>
            <p className="text-lg text-gray-700 mb-2">Ethraeon Systems</p>
            <p className="text-gray-600">
              Operating globally with offices in North America and Europe
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
