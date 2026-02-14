
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/handyman-data';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Pest Control',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    { Icon: Instagram, link: 'https://www.instagram.com/norwoodhomesolutions?igsh=MTMzM3BvemI3bmwzaw%3D%3D' }
  ];

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      setFormData({
        name: '',
        phone: '',
        email: '',
        service: 'Pest Control',
        message: '',
      });

      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });

    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">Contact Us</h2>
            <h3 className="text-4xl font-bold text-primary mb-8 font-headline">Ready to Get Started?</h3>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              We're available for regular maintenance or emergency repairs. Give us a call or send a message for a free, no-obligation estimate.
            </p>

            <div className="space-y-6">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Call Us Directly</p>
                  <p className="text-lg font-bold text-primary">{BUSINESS_INFO.phone}</p>
                </div>
              </a>
              <a href={`mailto:${BUSINESS_INFO.email}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Email Address</p>
                  <p className="text-lg font-bold text-primary">{BUSINESS_INFO.email}</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Serving Area</p>
                  <p className="text-lg font-bold text-primary">{BUSINESS_INFO.location} and Surrounding Areas</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Follow Us</p>
              <div className="flex gap-4">
                {socialLinks.map(({ Icon, link }, idx) => (
                  <a key={idx} href={link} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="rounded-full hover:bg-accent hover:text-white hover:border-accent">
                      <Icon className="w-5 h-5" />
                    </Button>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="bg-slate-50 p-10 rounded-3xl shadow-sm border border-slate-100">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" className="bg-white" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="(555) 000-0000" className="bg-white" value={formData.phone} onChange={handleChange} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="bg-white" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Requested Service</Label>
                  <select id="service" className="w-full h-10 px-3 py-2 bg-white border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent" value={formData.service} onChange={handleChange}>
                    <option>Pest Control</option>
                    <option>Snow Removal</option>
                    <option>Lawn Care</option>
                    <option>Home Repair</option>
                    <option>Gutter Cleaning</option>
                    <option>Power Washing</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Project Description</Label>
                  <Textarea id="message" placeholder="Please describe what you need help with..." className="bg-white min-h-[150px]" value={formData.message} onChange={handleChange} required />
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white h-14 text-lg rounded-xl" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
