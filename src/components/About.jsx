
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container-width section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
                <div className="w-72 h-72 bg-background rounded-full flex items-center justify-center border border-foreground/10">
                  <span className="text-6xl">👩‍💻</span>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <Card className="glass-effect">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">Full Stack Developer</h3>
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                   I’m a passionate full-stack developer specializing in Next.js (as a full-stack framework), the MERN stack, and currently expanding my expertise in Python development. I strive to build scalable, user-friendly solutions that deliver real value.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    When I'm not coding, you can find me exploring new technologies, contributing to 
                    open-source projects, or sharing knowledge with the developer community. I believe 
                    in writing clean, maintainable code and following best practices.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;