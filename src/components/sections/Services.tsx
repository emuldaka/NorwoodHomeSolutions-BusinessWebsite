
"use client";

import { SERVICES } from '@/data/handyman-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">Our Expertise</h2>
          <h3 className="text-4xl font-bold text-primary mb-6 font-headline">Professional Home Services</h3>
          <p className="text-muted-foreground text-lg">
            We provide a comprehensive range of handyman and home maintenance services tailored to your local environment and season.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => {
            const serviceImage = PlaceHolderImages.find(img => img.id === service.imageId);
            const Icon = service.icon;

            return (
              <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-none bg-slate-50 overflow-hidden">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image   
                    src={serviceImage?.imageUrl || "https://picsum.photos/seed/service/800/600"} 
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={serviceImage?.imageHint || "handyman repair"}
                  />
                  <div className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow-md">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <CardHeader className="pt-6">
                  <CardTitle className="text-xl font-bold group-hover:text-accent transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  <Link href="#contact" className="text-accent font-semibold text-sm inline-flex items-center gap-1 hover:underline">
                    Learn More 
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
