
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'TaskTide',
      description: '  A freelance marketplace platform enabling clients and freelancers to connect through a project bidding system.',
      technologies: ['Next.js', 'MongoDB', 'Docker'],
      liveUrl: 'https://task-tide-ochre.vercel.app/',
      githubUrl: 'https://github.com/AishwaryaAsabe/TaskTide'
    },
    {
      title: 'AI-Eco-Route_Planner',
      description: 'An AI-powered delivery platform designed to reduce carbon emissions by optimizing delivery routes.',
      technologies: ['Next.js', 'MongoDB'],
      liveUrl: '#',
      githubUrl: 'https://github.com/AishwaryaAsabe/AI-ECO-ROUTE-PLANNER'
    },
    {
      title: 'CropCircle ',
      description: 'An interactive web platform tailored for farmers, integrating features such as product bidding, crop and seed bank management, merchant and driver networking for logistics, and in-platform product selling.',
      technologies: ['Python ', 'Django', 'HTML', 'CSS3'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Blog Application',
      description: 'A blogging platform implementing full CRUD operations, allowing users to create, view, edit, and delete blog posts.',
      technologies: ['React', 'Django', 'SQLite'],
      liveUrl: '#',
      githubUrl: '#'
    },
     {
      title: 'ArtSphere',
      description: 'A social media-inspired platform that fosters engagement and content sharing among artists.',
      technologies: ['React', 'Node.js', 'Express.js','MongoDB'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container-width section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className="glass-effect hover:scale-105 transition-transform duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-foreground/70 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="p-6 pt-0 flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
