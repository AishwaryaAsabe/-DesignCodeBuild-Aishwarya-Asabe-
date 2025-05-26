
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'SQL']
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'Docker', 'Github','Postman']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-card/20">
      <div className="container-width section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Skills & Technologies</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={category.title} className="glass-effect animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div key={skill} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-foreground/80">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
