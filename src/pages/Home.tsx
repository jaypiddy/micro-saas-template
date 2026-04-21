import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Upload, Lock } from 'lucide-react';

export default function Home() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const handleSimulatedAction = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1500);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl flex flex-col gap-6">
        
        {/* Header */}
        <header className="flex items-center justify-center h-[150px] pb-4 border-b border-[var(--card-border)] w-full">
          <h1 className="flex items-center h-full m-0 p-0 text-white font-bold text-3xl tracking-tight">
            [APP_NAME] LOGO
          </h1>
        </header>

        {/* Value Prop Chips (CRO) */}
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <h2 className="text-white font-bold text-[22px] tracking-tight">[APP_NAME] - [APP_SUBTITLE]</h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="bg-[#1e293b] text-blue-400 border border-blue-500/20 px-3 py-1.5 rounded-full text-[12px] font-bold tracking-wide uppercase flex items-center gap-1.5">
              <Check size={14} /> 100% Free
            </div>
            <div className="bg-[#1e293b] text-blue-400 border border-blue-500/20 px-3 py-1.5 rounded-full text-[12px] font-bold tracking-wide uppercase flex items-center gap-1.5">
              <Check size={14} /> No Signups
            </div>
            <div className="bg-[#1e293b] text-blue-400 border border-blue-500/20 px-3 py-1.5 rounded-full text-[12px] font-bold tracking-wide uppercase flex items-center gap-1.5">
              <Lock size={14} /> Secure Local Processing
            </div>
          </div>
        </div>

        {/* Central Tool Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-3 w-full my-8"
        >
          <div className="bento-card relative overflow-hidden flex items-center justify-center flex-col min-h-[300px] border-2 border-dashed border-[var(--card-border)] bg-gradient-to-br from-[#161618] to-[#1a1a1e]">
            
            <h3 className="text-white font-bold text-xl mb-4">Your Tool Interface Goes Here</h3>
            <p className="text-[var(--text-secondary)] text-center text-sm max-w-md mb-8">
              Replace this container with your application logic. The layout, interaction design, and routing are already optimized.
            </p>

            <AnimatePresence mode="wait">
              {showSuccess ? (
                 <motion.div
                   key="success"
                   initial={{ scale: 0.8, opacity: 0 }}
                   animate={{ scale: 1, opacity: 1 }}
                   exit={{ scale: 0.8, opacity: 0 }}
                   className="bg-green-500/10 text-green-500 border border-green-500/20 font-bold px-6 py-2.5 rounded-full flex items-center gap-2"
                 >
                   <Check size={18} />
                   Action Completed!
                 </motion.div>
              ) : (
                 <motion.button
                   key="action"
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   onClick={handleSimulatedAction}
                   disabled={isProcessing}
                   className="btn-main flex items-center gap-2"
                 >
                   {isProcessing ? 'Processing Data...' : 'Run Example Action'}
                 </motion.button>
              )}
            </AnimatePresence>

          </div>
          
          <div className="flex items-center justify-center gap-2 text-[var(--text-secondary)] text-[12px] opacity-70 mt-2 font-medium">
            <Lock size={14} />
            <span>Securely runs entirely in your browser window. Zero external uploads.</span>
          </div>
        </motion.div>

        {/* Marketing / Explainer Section */}
        <div className="mt-8 flex flex-col gap-6">
          <section>
            <h2 className="text-[18px] font-bold text-white mb-4">Why use [APP_NAME]?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bento-card flex-col gap-3 !p-6 items-start">
                <div className="w-10 h-10 rounded-full bg-[var(--accent-glow)] flex items-center justify-center text-[var(--accent)] mb-1">
                  <Upload size={20} />
                </div>
                <h3 className="text-white font-semibold text-[15px]">[Benefit_1]</h3>
                <p className="text-[var(--text-secondary)] text-[13px] leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>
              </div>

              <div className="bento-card flex-col gap-3 !p-6 items-start">
                <div className="w-10 h-10 rounded-full bg-[var(--accent-glow)] flex items-center justify-center text-[var(--accent)] mb-1">
                  <Upload size={20} />
                </div>
                <h3 className="text-white font-semibold text-[15px]">[Benefit_2]</h3>
                <p className="text-[var(--text-secondary)] text-[13px] leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>
              </div>

              <div className="bento-card flex-col gap-3 !p-6 items-start">
                <div className="w-10 h-10 rounded-full bg-[var(--accent-glow)] flex items-center justify-center text-[var(--accent)] mb-1">
                  <Lock size={20} />
                </div>
                <h3 className="text-white font-semibold text-[15px]">100% Private & Local</h3>
                <p className="text-[var(--text-secondary)] text-[13px] leading-relaxed">
                  All processing happens locally right in your browser. Your data is secure and never uploaded to any external servers.
                </p>
              </div>
            </div>
          </section>

          {/* FAQs Section */}
          <section>
            <h2 className="text-[18px] font-bold text-white mb-4">Frequently Asked Questions</h2>
            <div className="flex flex-col gap-4">
              <article className="bento-card flex-col gap-2 !p-6">
                <h3 className="text-white font-semibold text-[15px]">[FAQ_QUESTION_1]</h3>
                <p className="text-[var(--text-secondary)] text-[14px] leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </article>
              <article className="bento-card flex-col gap-2 !p-6">
                <h3 className="text-white font-semibold text-[15px]">[FAQ_QUESTION_2]</h3>
                <p className="text-[var(--text-secondary)] text-[14px] leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
              </article>
              <article className="bento-card flex-col gap-2 !p-6">
                <h3 className="text-white font-semibold text-[15px]">[FAQ_QUESTION_3]</h3>
                <p className="text-[var(--text-secondary)] text-[14px] leading-relaxed">
                  Sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </p>
              </article>
              <article className="bento-card flex-col gap-2 !p-6">
                <h3 className="text-white font-semibold text-[15px]">[FAQ_QUESTION_4]</h3>
                <p className="text-[var(--text-secondary)] text-[14px] leading-relaxed">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
                </p>
              </article>
            </div>
          </section>
        </div>

      </div>
    </main>
  );
}
