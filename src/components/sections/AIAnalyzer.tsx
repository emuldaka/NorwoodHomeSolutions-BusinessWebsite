
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Sparkles, Loader2, ArrowRight } from 'lucide-react';
import { suggestServicesFromDescription } from '@/ai/flows/suggest-services-from-description';
import { SERVICES } from '@/data/handyman-data';

export default function AIAnalyzer() {
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<string[] | null>(null);

  const handleAnalyze = async () => {
    if (!description.trim()) return;
    setLoading(true);
    try {
      const response = await suggestServicesFromDescription({
        taskDescription: description,
        availableServices: SERVICES.map(s => s.title)
      });
      setResults(response.suggestedServices);
    } catch (error) {
      console.error("AI Analysis failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 text-accent mb-4">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-bold uppercase tracking-widest">AI Task Analyzer</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-headline">Not sure what you need?</h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Describe your project or problem in plain English, and our AI assistant will recommend the perfect services to get the job done right.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">1</div>
                <p className="text-slate-200">Describe the issue (e.g., "My gutters are leaking and my lawn looks overgrown")</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">2</div>
                <p className="text-slate-200">Get instant professional service recommendations</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm text-white">
              <CardHeader>
                <CardTitle>Try the Task Analyzer</CardTitle>
                <CardDescription className="text-slate-400">Enter your project description below</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Textarea 
                  placeholder="Example: I have some ants in the kitchen and the wooden deck out back has some loose boards..." 
                  className="bg-white/10 border-white/20 text-white placeholder:text-slate-500 min-h-[120px] focus:ring-accent"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <Button 
                  onClick={handleAnalyze} 
                  disabled={loading || !description}
                  className="w-full bg-accent hover:bg-accent/90 text-white h-12 rounded-lg"
                >
                  {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                  Analyze Task
                </Button>

                {results && (
                  <div className="mt-8 p-6 bg-accent/10 rounded-xl border border-accent/20 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h4 className="text-accent font-bold mb-3 flex items-center gap-2">
                      Recommended Services:
                    </h4>
                    {results.length > 0 ? (
                      <ul className="space-y-3">
                        {results.map((service, idx) => (
                          <li key={idx} className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
                            <ArrowRight className="w-4 h-4 text-accent" />
                            <span className="font-medium">{service}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-slate-400 italic">No specific services matched your description. Contact us for a custom quote!</p>
                    )}
                    <Button variant="link" className="text-accent mt-4 p-0 h-auto font-bold" asChild>
                      <a href="#contact">Book these services now →</a>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
