import React from 'react';
import { Scale } from 'lucide-react';

export default function Terms() {
  return (
    <main className="min-h-screen py-12 px-4 max-w-3xl mx-auto flex flex-col gap-8">
      <header className="flex flex-col gap-4 border-b border-[var(--card-border)] pb-8">
        <div className="w-12 h-12 rounded-full bg-[var(--accent-glow)] flex items-center justify-center text-[var(--accent)]">
          <Scale size={24} />
        </div>
        <h1 className="text-3xl font-bold text-white tracking-tight">Terms of Service</h1>
        <p className="text-[var(--text-secondary)]">Effective Date: {new Date().toLocaleDateString()}</p>
      </header>
      
      <div className="prose prose-invert prose-blue max-w-none">
        <h2 className="text-xl font-semibold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
        <p className="text-[var(--text-secondary)] leading-relaxed">
          By accessing and using <strong>[APP_NAME]</strong>, you accept and agree to be bound by the terms and provisions of this agreement. 
        </p>

        <h2 className="text-xl font-semibold text-white mt-8 mb-4">2. Use License</h2>
        <p className="text-[var(--text-secondary)] leading-relaxed">
          Permission is granted to temporarily use the application for personal and commercial transient processing. This application is provided "as is" without warranty of any kind.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8 mb-4">3. Content and Processing</h2>
        <p className="text-[var(--text-secondary)] leading-relaxed">
          You agree that you are solely responsible for compliance with any laws regarding the content you process using our tool. Because processing is executed exclusively on your local machine, we have no access to, ownership of, or liability for any content processed through the site.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8 mb-4">4. Limitations</h2>
        <p className="text-[var(--text-secondary)] leading-relaxed">
          In no event shall <strong>[APP_NAME]</strong> or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit) arising out of the use or inability to use the materials on the website.
        </p>
      </div>
    </main>
  );
}
