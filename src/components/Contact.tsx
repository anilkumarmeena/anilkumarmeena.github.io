import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "anil98meena@gmail.com",
    href: "mailto:anil98meena@gmail.com",
    description: "Drop me a line for opportunities or collaborations"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 7690066126",
    href: "tel:+917690066126",
    description: "Available for calls and meetings"
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/anil98meena",
    href: "https://linkedin.com/in/anil98meena",
    description: "Connect for professional networking"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Noida, Uttar Pradesh",
    href: "#",
    description: "Open to remote and on-site opportunities"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss opportunities, collaborate on projects, or explore how I can contribute to your team's success
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 group border hover:border-accent/30">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-accent/10 p-3 rounded-full group-hover:bg-accent/20 transition-colors">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-primary">{method.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {method.href === "#" ? (
                      <p className="text-foreground font-medium">{method.value}</p>
                    ) : (
                      <a 
                        href={method.href}
                        target={method.href.startsWith('http') ? '_blank' : undefined}
                        rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-foreground font-medium hover:text-accent transition-colors flex items-center gap-2 group"
                      >
                        {method.value}
                        {method.href.startsWith('http') && (
                          <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </a>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-accent/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Ready to Build Something Amazing?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  I'm always excited to discuss new opportunities, whether it's leading a tech team, 
                  architecting scalable solutions, or contributing to innovative projects. Let's talk about 
                  how we can create impact together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-accent hover:bg-accent/90 text-accent-foreground"
                    onClick={() => window.open('mailto:anil98meena@gmail.com', '_blank')}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Send Email
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-accent/30 hover:bg-accent/10"
                    onClick={() => window.open('https://linkedin.com/in/anil98meena', '_blank')}
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    Connect on LinkedIn
                  </Button>
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