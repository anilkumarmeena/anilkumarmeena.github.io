import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Terminal, Send, MessageSquare } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "anil98meena@gmail.com",
    href: "mailto:anil98meena@gmail.com",
    description: "Drop me a line for opportunities or collaborations",
    color: "primary",
    code: "sendEmail(message)"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 7690066126",
    href: "tel:+917690066126",
    description: "Available for calls and meetings",
    color: "accent",
    code: "makeCall(number)"
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/anil98meena",
    href: "https://linkedin.com/in/anil98meena",
    description: "Connect for professional networking",
    color: "tech-green",
    code: "connect(linkedin)"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Noida, Uttar Pradesh",
    href: "#",
    description: "Open to remote and on-site opportunities",
    color: "tech-purple",
    code: "getLocation()"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-card/30 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 tech-grid opacity-5" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border rounded-lg px-4 py-2 mb-6">
            <Terminal className="h-4 w-4 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">contact.init()</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss <span className="text-primary font-semibold">opportunities</span>, collaborate on projects, or explore how I can contribute to your team's success
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card 
                  key={index} 
                  className="bg-card/60 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow group animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div className={`bg-${method.color}/20 p-3 rounded-xl group-hover:bg-${method.color}/30 transition-colors group-hover:scale-110 duration-300`}>
                        <Icon className={`h-6 w-6 text-${method.color}`} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg font-bold text-foreground">{method.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {method.href === "#" ? (
                      <p className="text-foreground font-medium font-mono">{method.value}</p>
                    ) : (
                      <a 
                        href={method.href}
                        target={method.href.startsWith('http') ? '_blank' : undefined}
                        rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-foreground font-medium hover:text-primary transition-colors flex items-center gap-2 group font-mono"
                      >
                        {method.value}
                        {method.href.startsWith('http') && (
                          <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </a>
                    )}
                    
                    <div className="code-block">
                      <p className="text-xs text-muted-foreground mb-1">// Quick action</p>
                      <code className={`text-${method.color} text-sm`}>{method.code}</code>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Enhanced CTA Section */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 backdrop-blur-sm overflow-hidden relative">
              {/* Animated code rain effect */}
              <div className="absolute inset-0 opacity-10">
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute text-primary font-mono text-xs animate-pulse"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`,
                    }}
                  >
                    {['{ }', '< />', '( )', '[ ]', '&&', '||', '=>'][Math.floor(Math.random() * 7)]}
                  </div>
                ))}
              </div>
              
              <CardContent className="p-8 relative z-10">
                <div className="max-w-3xl mx-auto space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Ready to Build Something Amazing?
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      I'm always excited to discuss new opportunities, whether it's leading a tech team, 
                      architecting scalable solutions, or contributing to innovative projects. Let's talk about 
                      how we can create impact together.
                    </p>
                  </div>
                  
                  {/* Status indicator */}
                  <div className="inline-flex items-center gap-2 bg-card/60 backdrop-blur-sm border border-border rounded-lg px-4 py-2">
                    <div className="w-2 h-2 bg-tech-green rounded-full animate-pulse" />
                    <span className="font-mono text-sm text-muted-foreground">status: available_for_opportunities</span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-glow hover:shadow-neon transition-all duration-300"
                      onClick={() => window.open('mailto:anil98meena@gmail.com', '_blank')}
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send Email
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-border bg-card/40 backdrop-blur-sm hover:bg-card/60 hover:border-primary/50 transition-all duration-300"
                      onClick={() => window.open('https://linkedin.com/in/anil98meena', '_blank')}
                    >
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Connect on LinkedIn
                    </Button>
                  </div>
                  
                  {/* Quick response promise */}
                  <div className="text-center pt-4">
                    <p className="text-sm text-muted-foreground font-mono">
                      ⚡ Quick response guaranteed • Usually within 24 hours
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;