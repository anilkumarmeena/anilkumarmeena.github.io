import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Zap, Star } from "lucide-react";

const awards = [
  {
    title: "Hack and Hustle 4.0 Hackathon Winner",
    organization: "Times Internet Limited",
    date: "February 2023",
    type: "Competition",
    icon: Trophy,
    description: "Won company-wide hackathon demonstrating innovation and technical excellence"
  },
  {
    title: "Aspire Award",
    organization: "Times Internet Limited", 
    date: "July 2023",
    type: "Performance",
    icon: Star,
    description: "Recognition for outstanding performance and contribution to company goals"
  },
  {
    title: "Aspire Award",
    organization: "Times Internet Limited",
    date: "July 2022", 
    type: "Performance",
    icon: Star,
    description: "Consecutive recognition for exceptional work quality and team contribution"
  },
  {
    title: "Tiger Award",
    organization: "Times Internet Limited",
    date: "July 2021",
    type: "Excellence",
    icon: Award,
    description: "Prestigious company award recognizing exceptional technical achievement"
  }
];

const Awards = () => {
  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Awards & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recognized for technical excellence, innovation, and outstanding contributions to team success
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 border border-accent/20 hover:border-accent/40">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg text-primary mb-2 leading-tight">
                        {award.title}
                      </CardTitle>
                      <p className="text-foreground font-medium">{award.organization}</p>
                      <p className="text-sm text-muted-foreground">{award.date}</p>
                    </div>
                    <Badge variant="secondary" className="bg-accent/10 text-accent">
                      {award.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {award.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Achievement summary */}
        <div className="mt-16 max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10 p-8 rounded-lg">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="h-6 w-6 text-accent" />
              <h3 className="text-xl font-bold text-primary">Recognition Highlights</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Consistently recognized for technical innovation, leadership excellence, and significant contributions 
              to company success over multiple years. These awards reflect a track record of delivering high-impact 
              solutions and driving team performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;