
"use client";

import Link from 'next/link';
import { Hammer, Mail, Phone, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/handyman-data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-slate-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 text-white">
              <div className="bg-accent p-1.5 rounded-lg">
                <Hammer className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                {BUSINESS_INFO.name}
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Your professional partner for year-round home maintenance, repairs, and seasonal services. Proudly serving our local community with trust and quality.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'About', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="hover:text-accent transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Our Services</h4>
            <ul className="space-y-4">
              <li>Pest Control</li>
              <li>Snow Shoveling</li>
              <li>Lawn & Garden</li>
              <li>Home Repairs</li>
              <li>Gutter Cleaning</li>
              <li>Power Washing</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>{BUSINESS_INFO.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span>{BUSINESS_INFO.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span>{BUSINESS_INFO.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} {BUSINESS_INFO.name}. All rights reserved.</p>
          <p>Proudly serving {BUSINESS_INFO.location} since {BUSINESS_INFO.yearEstablished}</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
