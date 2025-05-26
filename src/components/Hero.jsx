
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-background"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container-width section-padding relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="gradient-text">Aishwarya Asabe</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-foreground/80 mb-6 font-medium">
              Full Stack Developer & AI Enthusiast
            </h2>
            <p className="text-xl text-foreground/60 mb-8 max-w-2xl mx-auto">
              Passionate about creating innovative web solutions using modern technologies. 
              Specialized in Next.js & MERN stack development with a focus on user experience and performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href='/contact'></a>
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
               <Button asChild variant="outline" size="lg">
              <a href="/Aishwarya_Asabe.pdf" download>
      <Download className="mr-2 h-5 w-5" />
      Download Resume
    </a>
  </Button>
            </div>
          </div>

          <div className="mt-16 animate-bounce">
            <ArrowDown className="mx-auto h-6 w-6 text-foreground/40" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
