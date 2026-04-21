import React from 'react';
import { Info } from 'lucide-react';

export default function About() {
  return (
    <main className="min-h-screen py-12 px-4 max-w-3xl mx-auto flex flex-col gap-8">
      <header className="flex flex-col gap-4 border-b border-[var(--card-border)] pb-8">
        <div className="w-12 h-12 rounded-full bg-[var(--accent-glow)] flex items-center justify-center text-[var(--accent)]">
          <Info size={24} />
        </div>
        <h1 className="text-3xl font-bold text-white tracking-tight">About Us</h1>
        <p className="text-[var(--text-secondary)]">The mission and technology behind [APP_NAME].</p>
      </header>
      
      <div className="prose prose-invert prose-blue max-w-none">
        <h2 className="text-xl font-semibold text-white mt-8 mb-4">Our Mission</h2>
        <p className="text-[var(--text-secondary)] leading-relaxed">
          We built <strong>[APP_NAME]</strong> to solve a simple problem: providing a highly secure, entirely local web utility that doesn't rely on expensive or invasive cloud servers.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8 mb-4">The Technology</h2>
        <p className="text-[var(--text-secondary)] leading-relaxed">
          Unlike older generations of web tools, this application runs entirely within your browser utilizing modern WebAssembly and local JavaScript engines. 
          When you execute actions, the entire process happens strictly on your local CPU and memory.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8 mb-4">Free and Accessible</h2>
        <p className="text-[var(--text-secondary)] leading-relaxed">
          This tool is provided 100% free of charge. We believe that utility software should be universally accessible without paywalls, subscriptions, or invasive account requirements.
        </p>
      </div>
    </main>
  );
}
