
"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BUSINESS_INFO } from '@/data/handyman-data';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const ownerImage = PlaceHolderImages.find(img => img.id === 'about-owner');

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                loading='eager' 
                src={ownerImage?.imageUrl || "https://picsum.photos/seed/owner/600/800"} 
                alt="Business Owner"
                width={600}
                height={800}
                className="w-full object-cover aspect-[4/5]"
                data-ai-hint="handyman portrait"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 p-8 text-white">
                <p className="text-sm font-bold uppercase tracking-widest text-accent mb-1">Founder & Manager</p>
                <h4 className="text-2xl font-bold">Nick</h4>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">About {BUSINESS_INFO.name}</h2>
            <h3 className="text-4xl font-bold text-primary mb-6 font-headline">Meet Your Local Handyman</h3>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            {BUSINESS_INFO.name}, founded in 2023, is built on a passion for helping our neighbors and a commitment to quality work. We approach every project with fresh energy and a dedication to earning your trust. Understanding that your home is your most valuable asset, we treat every task from minor repairs to seasonal maintenance with the same care and attention to detail as if it were our own.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Based in {BUSINESS_INFO.location}, we specialize in seasonal maintenance that keeps your property safe and beautiful year-round. From the thick of winter snow to the height of summer lawn care, we're here to help.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "3+ Years Experience",
                "Punctual & Reliable",
                "Clean Job Sites",
                "Free Accurate Estimates",
                "Competitive Pricing",
                "Satisfaction Guaranteed"
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="font-medium text-primary">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
