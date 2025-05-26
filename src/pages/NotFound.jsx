import React from 'react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-foreground/60 mb-8">The page you're looking for doesn't exist.</p>
        <Button asChild>
          <a href="/">Go Home</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
