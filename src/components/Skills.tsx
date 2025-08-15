import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Golang", "JavaScript", "TypeScript", "Dart", "Python", "SQL", "PHP", "Java", "C++", "HTML", "CSS", "BASH"]
  },
  {
    title: "Frameworks & Libraries", 
    icon: Wrench,
    skills: ["FFmpeg", "GStreamer", "Shaka Packager", "React", "Flutter", "Android", "Nx", "HLS.js", "Node.js"]
  },
  {
    title: "DevOps & API Tools",
    icon: Cloud,
    skills: ["Git", "Bitbucket", "CI/CD Pipeline", "Docker", "Swagger", "Postman", "Linux Administration"]
  },
  {
    title: "Cloud & Databases",
    icon: Database,
    skills: ["Google Cloud", "AWS", "Digital Ocean", "Akamai", "Elasticsearch", "Kafka", "DynamoDB", "MySQL", "MongoDB", "Firebase"]
  }
];

const Skills = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across the full technology stack, from low-level media processing to cloud-scale deployments
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-t-accent">
                <CardHeader className="text-center pb-6">
                  <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl text-primary">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors duration-200 text-sm px-3 py-1"
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

        {/* Additional highlights */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-primary mb-8">Specialized Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-6 rounded-lg">
              <h4 className="font-semibold text-lg text-primary mb-2">Media Processing</h4>
              <p className="text-muted-foreground text-sm">
                Expert in video transcoding, streaming protocols, and real-time media delivery systems
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 rounded-lg">
              <h4 className="font-semibold text-lg text-primary mb-2">Scalable Architecture</h4>
              <p className="text-muted-foreground text-sm">
                Designing systems that handle millions of concurrent users with automated failure recovery
              </p>
            </div>
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-6 rounded-lg">
              <h4 className="font-semibold text-lg text-primary mb-2">AI Integration</h4>
              <p className="text-muted-foreground text-sm">
                Implementing AI-driven solutions for content generation and automated media processing
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;