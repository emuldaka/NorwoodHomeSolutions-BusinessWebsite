
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Clock, Award } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/handyman-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section id="home" className="relative h-[90vh] min-h-[700px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage?.imageUrl || "https://picsum.photos/seed/handyman1/1920/1080"}
          alt={heroImage?.description || "Handyman background"}
          fill
          priority
          className="object-cover"
          data-ai-hint="handyman house"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">{BUSINESS_INFO.licensed}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 font-headline">
            {BUSINESS_INFO.tagline}
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-slate-200 max-w-2xl font-light">
            Pest Removal • Snow Shoveling • Home Repairs • Gutter Cleaning • And More.
            Professional, reliable service for your home's needs year-round.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 h-14 text-lg rounded-full" asChild>
              <a href="#contact">Get a Free Quote</a>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 h-14 px-8 text-lg rounded-full" asChild>
              <a href="#services">View Services</a>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-accent" />
              <span className="text-sm font-medium">{BUSINESS_INFO.licensed}</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-accent" />
              <span className="text-sm font-medium">Quick Turnaround</span>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-accent" />
              <span className="text-sm font-medium">{BUSINESS_INFO.experience}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
