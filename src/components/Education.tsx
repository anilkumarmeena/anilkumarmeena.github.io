import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strong foundation in computer science from a prestigious technical institution
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg border-l-4 border-l-accent hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-6">
              <div className="flex items-start gap-6">
                <div className="bg-accent/10 p-4 rounded-full">
                  <GraduationCap className="h-8 w-8 text-accent" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl text-primary mb-3">
                    Bachelor of Engineering in Computer Science
                  </CardTitle>
                  <p className="text-xl font-semibold text-foreground mb-4">
                    Birla Institute of Technology
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>Mesra, Ranchi</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>June 2016 – May 2020</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-section-bg rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Core Focus</h4>
                  <p className="text-sm text-muted-foreground">
                    Computer Science fundamentals, algorithms, data structures, and software engineering principles
                  </p>
                </div>
                <div className="text-center p-4 bg-section-bg rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Institution</h4>
                  <p className="text-sm text-muted-foreground">
                    Premier technical institute known for excellence in engineering and technology education
                  </p>
                </div>
                <div className="text-center p-4 bg-section-bg rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Foundation</h4>
                  <p className="text-sm text-muted-foreground">
                    Strong theoretical foundation enabling practical application in complex software systems
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;