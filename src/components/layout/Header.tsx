
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Hammer } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/handyman-data';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-accent p-1.5 rounded-lg">
            <Hammer className="w-6 h-6 text-white" />
          </div>
          <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-primary' : 'text-white md:text-primary'}`}>
            {BUSINESS_INFO.name}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {['Services', 'About', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-medium transition-colors hover:text-accent ${isScrolled ? 'text-primary' : 'text-white'}`}
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild variant="default" className="bg-accent hover:bg-accent/90 hidden sm:inline-flex">
            <Link href="#contact">Free Quote</Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" aria-label="Toggle Menu">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </Button>
        </div>
      </div>
    </header>
  );
}
