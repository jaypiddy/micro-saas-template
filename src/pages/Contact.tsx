import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Connect your formspree endpoint here
    const form = e.currentTarget;
    fetch('https://formspree.io/f/YOUR_ENDPOINT_HERE', {
      method: 'POST',
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        setFormState('success');
        form.reset();
      } else {
        setFormState('idle');
        alert("Oops! There was a problem submitting your form");
      }
    }).catch(() => {
      setFormState('idle');
      alert("Oops! There was a problem submitting your form");
    });
  };

  return (
    <main className="min-h-screen py-12 px-4 max-w-3xl mx-auto flex flex-col gap-8">
      <header className="flex flex-col gap-4 border-b border-[var(--card-border)] pb-8">
        <div className="w-12 h-12 rounded-full bg-[var(--accent-glow)] flex items-center justify-center text-[var(--accent)]">
          <Mail size={24} />
        </div>
        <h1 className="text-3xl font-bold text-white tracking-tight">Contact Us</h1>
        <p className="text-[var(--text-secondary)]">Have questions, bugs, or feature requests? Let us know.</p>
      </header>

      <div className="bento-card relative overflow-hidden flex flex-col border-[var(--card-border)] bg-gradient-to-br from-[#161618] to-[#1a1a1e] !p-8">
        <AnimatePresence mode="wait">
          {formState === 'success' ? (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-16 text-center gap-4"
            >
              <CheckCircle size={48} className="text-green-500 mb-2" />
              <h2 className="text-2xl font-bold text-white">Message Sent!</h2>
              <p className="text-[var(--text-secondary)] max-w-sm">Thanks for reaching out. We will get back to you as soon as possible.</p>
              <button onClick={() => setFormState('idle')} className="mt-4 text-[var(--accent)] hover:underline">Send another message</button>
            </motion.div>
          ) : (
            <motion.form 
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              onSubmit={handleSubmit}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-col md:flex-row gap-6 w-full">
                <div className="field flex-1">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required placeholder="John Doe" />
                </div>
                <div className="field flex-1">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required placeholder="john@example.com" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  rows={6} 
                  className="input-field resize-none" 
                  placeholder="How can we help?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={formState === 'submitting'} 
                className="btn-main mt-2 w-full md:w-auto md:self-end"
              >
                {formState === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
