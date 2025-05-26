
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-card/20 border-t border-foreground/10">
      <div className="container-width section-padding py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-foreground/60">
              © 2025 Aishwarya Asabe. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#home" className="text-foreground/60 hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="text-foreground/60 hover:text-primary transition-colors">
              About
            </a>
            <a href="#projects" className="text-foreground/60 hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-foreground/60 hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-foreground/10 text-center">
          <a href="#home" className="text-primary hover:text-primary/80 transition-colors">
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
