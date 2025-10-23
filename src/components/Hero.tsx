import { Mail, Phone, MapPin, Linkedin, Github, Code, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated background grid */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Terminal-style header */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border rounded-lg px-4 py-2 mb-6">
              <Terminal className="h-4 w-4 text-accent" />
              <span className="font-mono text-sm text-muted-foreground">~/portfolio/anil-kumar-meena</span>
              <div className="w-2 h-4 bg-accent animate-pulse ml-2" />
            </div>
          </div>

          {/* Name with gradient */}
          <div className="space-y-4 animate-slide-in-left">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight bg-gradient-to-r from-primary via-accent to-tech-purple bg-clip-text text-transparent">
              Anil Kumar Meena
            </h1>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 bg-card/60 backdrop-blur-sm border border-border rounded-full px-4 py-2">
                <Code className="h-4 w-4 text-primary" />
                <span className="font-mono text-sm">Tech Lead</span>
              </div>
              <div className="flex items-center gap-2 bg-card/60 backdrop-blur-sm border border-border rounded-full px-4 py-2">
                <Terminal className="h-4 w-4 text-accent" />
                <span className="font-mono text-sm">Full Stack Developer</span>
              </div>
            </div>
          </div>

          {/* Description with typewriter effect */}
          <div className="animate-slide-in-right">
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Building <span className="text-primary font-semibold">scalable systems</span> that handle{" "}
              <span className="text-accent font-semibold">millions of users</span> while driving{" "}
              <span className="text-tech-green font-semibold">innovation</span> in media technology and AI
            </p>
          </div>

          {/* Tech stack preview */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['Golang', 'React', 'TypeScript', 'Docker', 'Kubernetes', 'AI/ML'].map((tech, index) => (
                <div 
                  key={tech}
                  className="bg-card/40 backdrop-blur-sm border border-border rounded-lg px-3 py-1 hover-glow transition-all duration-300 hover:border-primary/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="font-mono text-sm text-foreground">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact info in cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="bg-card/40 backdrop-blur-sm border border-border rounded-lg p-3 hover-glow">
              <MapPin className="h-4 w-4 text-primary mx-auto mb-1" />
              <p className="text-xs font-mono text-muted-foreground">Noida, UP</p>
            </div>
            <div className="bg-card/40 backdrop-blur-sm border border-border rounded-lg p-3 hover-glow">
              <Phone className="h-4 w-4 text-accent mx-auto mb-1" />
              <p className="text-xs font-mono text-muted-foreground">+91 7690066126</p>
            </div>
            <div className="bg-card/40 backdrop-blur-sm border border-border rounded-lg p-3 hover-glow">
              <Mail className="h-4 w-4 text-tech-green mx-auto mb-1" />
              <p className="text-xs font-mono text-muted-foreground">anil98meena@gmail.com</p>
            </div>
            <div className="bg-card/40 backdrop-blur-sm border border-border rounded-lg p-3 hover-glow">
              <Linkedin className="h-4 w-4 text-tech-purple mx-auto mb-1" />
              <p className="text-xs font-mono text-muted-foreground">linkedin/anil98meena</p>
            </div>
          </div>

          {/* CTA Buttons with modern styling */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-glow hover:shadow-neon transition-all duration-300 border-0"
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Code className="h-4 w-4 mr-2" />
              View Experience
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-border bg-card/40 backdrop-blur-sm hover:bg-card/60 hover:border-primary/50 transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Terminal className="h-4 w-4 mr-2" />
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center bg-card/20 backdrop-blur-sm">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
          <span className="text-xs font-mono text-muted-foreground">scroll</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;