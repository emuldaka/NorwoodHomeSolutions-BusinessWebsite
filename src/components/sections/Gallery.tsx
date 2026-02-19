
"use client";

import Image from 'next/image';
import { GALLERY_ITEMS } from '@/data/handyman-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">Our Work</h2>
          <h3 className="text-4xl font-bold text-primary mb-6 font-headline">Project Gallery</h3>
          <p className="text-muted-foreground text-lg">
            A showcase of our recent projects and the quality you can expect from Norwood Home Solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item) => {
            const galleryImg = PlaceHolderImages.find(img => img.id === item.imageId);
            return (
              <div key={item.id} className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                <Image 
                  loading='eager' 
                  src={galleryImg?.imageUrl || "https://picsum.photos/seed/gallery/800/800"} 
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  data-ai-hint={galleryImg?.imageHint || "house renovation"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent transition-opacity duration-300 flex items-end p-8">
                  <h4 className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.title}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
