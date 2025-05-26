
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-card/20">
      <div className="container-width section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 gradient-text">Resume</h2>
          
          <Card className="glass-effect animate-scale-in">
            <CardContent className="p-12">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Download My Resume</h3>
                <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
                  Get a detailed overview of my experience, skills, and achievements. 
                  My resume includes my professional journey, education, and key projects.
                </p>
              </div>
              
              <Button asChild  size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                            <a href="/Aishwarya_Asabe.pdf" download>

                <Download className="mr-2 h-5 w-5" />
                Download Resume (PDF)
                </a>
              </Button>
              
              <div className="mt-8 text-sm text-foreground/50">
                Last updated: May 2025
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Resume;
