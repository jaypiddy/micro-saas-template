import React from 'react';
import { Shield } from 'lucide-react';

export default function Privacy() {
  return (
    <main className="min-h-screen py-12 px-4 max-w-3xl mx-auto flex flex-col gap-8">
      <header className="flex flex-col gap-4 border-b border-[var(--card-border)] pb-8">
        <div className="w-12 h-12 rounded-full bg-[var(--accent-glow)] flex items-center justify-center text-[var(--accent)]">
          <Shield size={24} />
        </div>
        <h1 className="text-3xl font-bold text-white tracking-tight">Privacy Policy</h1>
        <p className="text-[var(--text-secondary)]">Effective Date: {new Date().toLocaleDateString()}</p>
      </header>
      
      <div className="prose prose-invert prose-blue max-w-none">
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          At <strong>[APP_NAME]</strong>, your privacy and security are our highest priority. We explicitly designed our tool architecture to minimize data collection.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8 mb-4">1. Local Processing Architecture</h2>
        <p className="text-[var(--text-secondary)] leading-relaxed">
          <strong>[APP_NAME]</strong> processes all of your data entirely within your browser natively. Any files, inputs, or generated content are handled locally on your device. We do not upload, transmit, or store your files to any external cloud servers.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8 mb-4">2. Data Collection</h2>
        <p className="text-[var(--text-secondary)] leading-relaxed">
          We do not collect personally identifiable information (PII). We do not require accounts, sign-ups, or login credentials. We use essential analytics to monitor website uptime and performance.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8 mb-4">3. Third-Party Services & Cookies</h2>
        <p className="text-[var(--text-secondary)] leading-relaxed">
          We use Google AdSense to serve advertisements. Third party vendors, including Google, use cookies to serve ads based on your prior visits to this website or other websites. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to this site.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8 mb-4">4. Contact Us</h2>
        <p className="text-[var(--text-secondary)] leading-relaxed">
          If you have any questions regarding this Privacy Policy, please reach out directly via our <a href="/contact" className="text-[var(--accent)] hover:underline">Contact Page</a>.
        </p>
      </div>
    </main>
  );
}
