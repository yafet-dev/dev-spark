import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/home" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <div className="w-8 h-8 bg-brand rounded-sm flex items-center justify-center">
            <div className="w-4 h-4 bg-black rotate-45" />
          </div>
          <span className="text-2xl font-bold tracking-tight font-display">DevSpark.</span>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="flex items-center gap-1 text-xs font-light hover:text-brand transition-colors">
            Home <ChevronDown size={12} />
          </a>
          <a href="#" className="text-xs font-light hover:text-brand transition-colors">About Us</a>
          <a href="#" className="text-xs font-light hover:text-brand transition-colors">Features</a>
          <a href="#" className="text-xs font-light hover:text-brand transition-colors">Pricing</a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <a href="#" className="hidden lg:flex items-center gap-1 text-xs font-light hover:text-brand transition-colors">
            Pages <ChevronDown size={12} />
          </a>
          <button className="bg-white text-black px-5 py-2 rounded-full text-xs font-normal hover:bg-[#f3ff9b] hover:shadow-[0_0_20px_rgba(243,255,155,0.4)] active:scale-95 transition-all duration-500 ease-out">
            Get in Touch
          </button>
        </div>
      </div>
    </motion.header>
  );
}
