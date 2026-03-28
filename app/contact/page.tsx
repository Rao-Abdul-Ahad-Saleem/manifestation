'use client';

import { FormEvent, ChangeEvent, useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import LargeFileUploader from '@/components/LargeFileUploader';

interface FormData {
  name: string;
  email: string;
  company: string;
  website: string;
  deadline: string;
  description: string;
  file: File | null;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    website: '',
    deadline: '',
    description: '',
    file: null,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      file,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    setSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        website: '',
        deadline: '',
        description: '',
        file: null,
      });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <section className="py-20 bg-white dark:bg-[#262324] min-h-screen">
      <div className="container mx-auto px-5 lg:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Get Estimate Now
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Tell us about your project and we'll get back to you shortly
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-10 xl:gap-16">
            {/* Left Column: Form */}
            <div className="bg-slate-50 dark:bg-[#2d2a2b] rounded-2xl p-8 border border-slate-100 dark:border-slate-800 shadow-lg">
              {submitted && (
                <div className="mb-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 text-emerald-800 dark:text-emerald-300 rounded">
                  Thank you! Your information has been submitted successfully.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email in one row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 border border-slate-300 dark:border-[#3d3a3b] bg-white dark:bg-[#363233] text-slate-900 dark:text-slate-100 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 border border-slate-300 dark:border-[#3d3a3b] bg-white dark:bg-[#363233] text-slate-900 dark:text-slate-100 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all"
                    />
                  </div>
                </div>

                {/* Company Name and Website in one row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company (optional)"
                      className="w-full px-4 py-3 border border-slate-300 dark:border-[#3d3a3b] bg-white dark:bg-[#363233] text-slate-900 dark:text-slate-100 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">
                      Company Website
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://example.com"
                      className="w-full px-4 py-3 border border-slate-300 dark:border-[#3d3a3b] bg-white dark:bg-[#363233] text-slate-900 dark:text-slate-100 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all"
                    />
                  </div>
                </div>

                {/* Deadline */}
                <div>
                  <label htmlFor="deadline" className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">
                    Deadline *
                  </label>
                  <input
                    type="date"
                    id="deadline"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 dark:border-[#3d3a3b] bg-white dark:bg-[#363233] text-slate-900 dark:text-slate-100 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all"
                  />
                </div>

                {/* Project Description in one line */}
                <div>
                  <label htmlFor="description" className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    placeholder="Please describe your project in detail"
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-[#3d3a3b] bg-white dark:bg-[#363233] text-slate-900 dark:text-slate-100 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all resize-vertical"
                  />
                </div>

                {/* Upload Plan - Required */}
                <div>
                  <label htmlFor="file" className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">
                    Upload Plan *
                  </label>
                  <label htmlFor="file" className="flex items-center justify-center w-full px-4 py-3 border-2 border-dashed border-slate-300 dark:border-[#3d3a3b] rounded-lg cursor-pointer hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-[#363233] transition-all bg-white dark:bg-[#363233]">
                    <input
                      type="file"
                      id="file"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg"
                      required
                      className="hidden"
                    />
                    <span className="text-slate-600 dark:text-slate-400 text-sm">
                      {formData.file ? formData.file.name : 'Choose a file *'}
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="w-full bg-[#124191] hover:bg-blue-800 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg"
                >
                  Submit Info
                </button>
              </form>
            </div>

            {/* Right Column: Contact Information */}
            <div className="space-y-8">
              <div className="bg-slate-50 dark:bg-[#2d2a2b] rounded-2xl p-8 border border-slate-100 dark:border-[#3d3a3b] shadow-lg">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="mt-1 shrink-0">
                      <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Email</h3>
                      <a href="mailto:info@bidestimation.com" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        info@bidestimation.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="mt-1 shrink-0">
                      <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Phone</h3>
                      <a href="tel:+11234567890" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        +1 (123) 456-7890
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="mt-1 shrink-0">
                      <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Address</h3>
                      <p className="text-slate-600 dark:text-slate-300">
                        123 Construction Ave<br />
                        Suite 100<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-4">
                    <div className="mt-1 shrink-0">
                      <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Business Hours</h3>
                      <p className="text-slate-600 dark:text-slate-300">
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us Box */}
              <div className="bg-blue-50 dark:bg-[#2d2a2b] rounded-2xl p-8 border border-blue-100 dark:border-[#3d3a3b]">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                  Why Choose Us?
                </h2>
                <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
                    <span>24-48 Hour Turnaround Time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
                    <span>Precision-Driven Accuracy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
                    <span>Trusted Nationwide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
                    <span>Expert Estimators</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>

        {/* Form section */}
        <LargeFileUploader/>
      </div>
    </section>
  );
}
