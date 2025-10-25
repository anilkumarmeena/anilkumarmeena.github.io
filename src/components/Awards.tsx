import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Zap, Star, Terminal, Calendar } from "lucide-react";

const awards = [
  {
    title: "Hack and Hustle 4.0 Hackathon Winner",
    organization: "Times Internet Limited",
    date: "February 2023",
    type: "Competition",
    icon: Trophy,
    description: "Won company-wide hackathon demonstrating innovation and technical excellence",
    color: "tech-orange",
    gradient: "from-tech-orange to-accent"
  },
  {
    title: "Aspire Award",
    organization: "Times Internet Limited", 
    date: "July 2023",
    type: "Performance",
    icon: Star,
    description: "Recognition for outstanding performance and contribution to company goals",
    color: "primary",
    gradient: "from-primary to-tech-purple"
  },
  {
    title: "Aspire Award",
    organization: "Times Internet Limited",
    date: "July 2022", 
    type: "Performance",
    icon: Star,
    description: "Consecutive recognition for exceptional work quality and team contribution",
    color: "accent",
    gradient: "from-accent to-tech-cyan"
  },
  {
    title: "Tiger Award",
    organization: "Times Internet Limited",
    date: "July 2021",
    type: "Excellence",
    icon: Award,
    description: "Prestigious company award recognizing exceptional technical achievement",
    color: "tech-green",
    gradient: "from-tech-green to-primary"
  }
];

const Awards = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 tech-grid opacity-10" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border rounded-lg px-4 py-2 mb-6">
            <Terminal className="h-4 w-4 text-tech-orange" />
            <span className="font-mono text-sm text-muted-foreground">awards.list()</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-tech-orange to-primary bg-clip-text text-transparent mb-6">
            Awards & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recognized for <span className="text-tech-orange font-semibold">technical excellence</span>, innovation, and outstanding contributions to team success
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <Card 
                key={index} 
                className="bg-card/60 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow group animate-slide-in-left"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className={`bg-gradient-to-br ${award.gradient} p-4 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg font-bold text-foreground mb-2 leading-tight">
                        {award.title}
                      </CardTitle>
                      <p className="text-foreground font-medium">{award.organization}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Calendar className="h-3 w-3 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground font-mono">{award.date}</p>
                      </div>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`bg-${award.color}/10 text-${award.color} border-${award.color}/30 font-mono text-xs`}
                    >
                      {award.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {award.description}
                  </p>
                  
                  {/* Award code snippet */}
                  <div className="code-block mt-4">
                    <p className="text-xs text-muted-foreground mb-1">// Achievement unlocked</p>
                    <code className={`text-${award.color} text-sm`}>
                      achievement.unlock("{award.type.toLowerCase()}")
                    </code>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Achievement summary with modern design */}
        <div className="max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-tech-orange/10 border border-primary/20 backdrop-blur-sm overflow-hidden relative">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 left-4 w-32 h-32 border border-primary rounded-lg animate-pulse" />
              <div className="absolute bottom-4 right-4 w-24 h-24 border border-accent rounded-lg animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            
            <CardContent className="p-8 relative z-10">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Zap className="h-6 w-6 text-tech-orange" />
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-tech-orange bg-clip-text text-transparent">
                    Recognition Highlights
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Consistently recognized for technical innovation, leadership excellence, and significant contributions 
                  to company success over multiple years. These awards reflect a track record of delivering high-impact 
                  solutions and driving team performance.
                </p>
              </div>
              
              {/* Achievement metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-tech-orange font-mono">4</div>
                  <div className="text-sm text-muted-foreground">Awards Won</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary font-mono">3</div>
                  <div className="text-sm text-muted-foreground">Years Running</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-accent font-mono">1</div>
                  <div className="text-sm text-muted-foreground">Hackathon Win</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-tech-green font-mono">100%</div>
                  <div className="text-sm text-muted-foreground">Excellence Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Awards;