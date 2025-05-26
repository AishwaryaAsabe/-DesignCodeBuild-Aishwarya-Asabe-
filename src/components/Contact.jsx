import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.message) {
    toast({
      title: "Error",
      description: "Please fill in all fields.",
      variant: "destructive"
    });
    return;
  }

  emailjs.send(
    'service_vsqu7h4',     // replace with your actual Service ID
    'template_802bg7n',    // replace with your actual Template ID
    {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message
    },
    '__I7jflczv4uSYoCv'      // replace with your actual Public Key
  )
  .then(() => {
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  })
  .catch((error) => {
    console.error("EmailJS Error:", error);
    toast({
      title: "Error",
      description: "Something went wrong. Please try again later.",
      variant: "destructive"
    });
  });
};

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/aishwarya-asabe-7aba19234/', icon: '💼' },
    { name: 'GitHub', url: 'https://github.com/AishwaryaAsabe', icon: '🐱' },
    { name: 'Twitter', url: 'https://x.com/Aishwarya_Asabe', icon: '🐦' },
    { name: 'Email', url: 'mailto:aishwaryaasabe007@gmail.com', icon: '📧' }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container-width section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Get In Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="glass-effect animate-slide-in-left">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <Mail className="mr-3 h-6 w-6 text-primary" />
                  Send Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-background/50 border-foreground/20"
                    />
                  </div>
                  
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-background/50 border-foreground/20"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="bg-background/50 border-foreground/20 resize-none"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            {/* Contact Info */}
            <div className="animate-slide-in-right">
              <Card className="glass-effect mb-8">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    I'm always open to discussing new opportunities, interesting projects, 
                    or just having a chat about technology and development.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <strong>Email:</strong>
                      <a href="asabeaish@gmail.com" className="text-primary hover:underline ml-2">
                        aishwaryaasabe007@gmail.com
                      </a>
                    </div>
                    <div>
                      <strong>Phone:</strong>
                      <span className="ml-2">+91 9960040015</span>
                    </div>
                    <div>
                      <strong>Location:</strong>
                      <span className="ml-2">Pandharpur</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Social Links */}
              <Card className="glass-effect">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6">Follow Me</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-3 rounded-lg bg-background/50 hover:bg-background/70 transition-colors"
                      >
                        <span className="text-xl">{link.icon}</span>
                        <span className="text-sm">{link.name}</span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
