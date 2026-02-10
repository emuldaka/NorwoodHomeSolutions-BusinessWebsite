
"use client";

import { TESTIMONIALS } from '@/data/handyman-data';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">Testimonials</h2>
          <h3 className="text-4xl font-bold text-primary mb-6 font-headline">What Our Clients Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TESTIMONIALS.map((t) => (
            <Card key={t.id} className="border-none shadow-xl hover:-translate-y-1 transition-transform duration-300">
              <CardContent className="pt-10 pb-8 px-8 relative">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-accent/10" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < t.rating ? 'text-accent fill-accent' : 'text-slate-200'}`} />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-6 leading-relaxed">
                  "{t.quote}"
                </p>
                <div>
                  <h4 className="font-bold text-primary">{t.name}</h4>
                  <p className="text-xs text-accent uppercase tracking-widest font-semibold">{t.city}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
