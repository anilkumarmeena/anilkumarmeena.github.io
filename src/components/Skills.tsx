import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Wrench, Terminal, Cpu, Network, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Golang", "JavaScript", "TypeScript", "Dart", "Python", "SQL", "PHP", "Java", "C++", "HTML", "CSS", "BASH"],
    gradient: "from-primary to-tech-cyan"
  },
  {
    title: "Frameworks & Libraries", 
    icon: Wrench,
    skills: ["FFmpeg", "GStreamer", "Shaka Packager", "React", "Flutter", "Android", "Nx", "HLS.js", "Node.js"],
    gradient: "from-accent to-tech-green"
  },
  {
    title: "DevOps & API Tools",
    icon: Cloud,
    skills: ["Git", "Bitbucket", "CI/CD Pipeline", "Docker", "Swagger", "Postman", "Linux Administration"],
    gradient: "from-tech-purple to-primary"
  },
  {
    title: "Cloud & Databases",
    icon: Database,
    skills: ["Google Cloud", "AWS", "Digital Ocean", "Akamai", "Elasticsearch", "Kafka", "DynamoDB", "MySQL", "MongoDB", "Firebase"],
    gradient: "from-tech-orange to-accent"
  }
];

const specializations = [
  {
    icon: Cpu,
    title: "Media Processing",
    description: "Expert in video transcoding, streaming protocols, and real-time media delivery systems",
    technologies: ["FFmpeg", "GStreamer", "HLS", "RTMP"],
    color: "primary"
  },
  {
    icon: Network,
    title: "Scalable Architecture",
    description: "Designing systems that handle millions of concurrent users with automated failure recovery",
    technologies: ["Kubernetes", "Docker", "Microservices", "Load Balancing"],
    color: "accent"
  },
  {
    icon: Zap,
    title: "AI Integration",
    description: "Implementing AI-driven solutions for content generation and automated media processing",
    technologies: ["OpenAI", "TensorFlow", "Computer Vision", "NLP"],
    color: "tech-green"
  }
];

const Skills = () => {
  return (
    <section className="py-20 bg-card/30 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 tech-grid opacity-5" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border rounded-lg px-4 py-2 mb-6">
            <Terminal className="h-4 w-4 text-accent" />
            <span className="font-mono text-sm text-muted-foreground">skills.enumerate()</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across the <span className="text-accent font-semibold">full technology stack</span>, from low-level media processing to cloud-scale deployments
          </p>
        </div>

        {/* Main skill categories */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index} 
                className="bg-card/60 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow group animate-slide-in-right"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader className="text-center pb-6">
                  <div className={`mx-auto w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="outline" 
                        className="bg-card/40 border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-200 text-sm px-3 py-1 font-mono hover-scale"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Specializations */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Specialized Expertise
            </h3>
            <p className="text-lg text-muted-foreground">
              Deep domain knowledge in critical areas of modern software development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specializations.map((spec, index) => {
              const Icon = spec.icon;
              return (
                <Card 
                  key={index}
                  className="bg-card/60 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow group text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className={`mx-auto w-14 h-14 bg-${spec.color}/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-${spec.color}/30 transition-colors`}>
                      <Icon className={`h-7 w-7 text-${spec.color}`} />
                    </div>
                    <CardTitle className="text-lg font-bold text-foreground">
                      {spec.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {spec.description}
                    </p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {spec.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="secondary" 
                          className={`bg-${spec.color}/10 text-${spec.color} border-${spec.color}/30 text-xs font-mono`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Performance metrics */}
        <div className="mt-20 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Impact Metrics
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary font-mono">$250K+</div>
                  <div className="text-sm text-muted-foreground">Cost Savings</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-accent font-mono">Millions</div>
                  <div className="text-sm text-muted-foreground">Users Served</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-tech-green font-mono">99.9%</div>
                  <div className="text-sm text-muted-foreground">System Uptime</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-tech-purple font-mono">40%</div>
                  <div className="text-sm text-muted-foreground">Performance Boost</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;