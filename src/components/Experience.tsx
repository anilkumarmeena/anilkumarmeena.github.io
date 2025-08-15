import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, TrendingUp } from "lucide-react";

const experiences = [
  {
    title: "Tech Lead",
    company: "Times Internet Limited",
    period: "March 2022 – Present",
    location: "Noida, India",
    achievements: [
      {
        title: "Webstudio Development",
        description: "Led development of real-time broadcasting software with TV-like experience, including conferencing system and mobile news reporting features. Used by TOI, NBT, MH TIMES.",
        impact: "Reduced costs by $200 per news segment vs satellite setups"
      },
      {
        title: "AI-Powered Article-to-Video Software",
        description: "Developed automated video creation system using OpenAI, Node.js, Golang, and FFmpeg for processing in-house articles.",
        impact: "40% increase in content base with automated video generation"
      },
      {
        title: "Central Monitoring System",
        description: "Architected in-house monitoring solution with React, Golang, Kafka, Elasticsearch for real-time health monitoring and automated failure recovery.",
        impact: "$50K annual cost savings replacing external solutions"
      }
    ],
    skills: ["Golang", "React", "Node.js", "FFmpeg", "OpenAI", "Kafka", "Elasticsearch"]
  },
  {
    title: "Full Stack Developer",
    company: "Times Internet Limited",
    period: "July 2021 – February 2022",
    location: "Noida, India",
    achievements: [
      {
        title: "Cleo Player Development",
        description: "Built in-house media player using TypeScript and HLS.js supporting live, Simulive, and VOD playback with encrypted media and subtitle support.",
        impact: "50% cost reduction with manifest-less technology"
      },
      {
        title: "Mediaengine Backend",
        description: "Developed 24/7 live streaming backend with RTMP pub-sub, GStreamer transcoding, FFmpeg HLS transmuxing, and automatic failure recovery.",
        impact: "Reliable streaming with social platform simulcasting"
      },
      {
        title: "Digital Asset Management",
        description: "Built media transcoding and transmuxing system with resumable uploads, video DRM, subtitles, and multi-audio support.",
        impact: "50% reduction in processing time with lower failure rates"
      }
    ],
    skills: ["TypeScript", "Golang", "GStreamer", "FFmpeg", "HLS.js", "RTMP"]
  },
  {
    title: "Software Developer",
    company: "Times Internet Limited", 
    period: "July 2020 – June 2021",
    location: "Noida, India",
    achievements: [
      {
        title: "High-Scale Event Backend",
        description: "Developed horizontally scalable backend managing millions of concurrent users from TOI, ET, and NBT with real-time interactions.",
        impact: "Handled millions of daily concurrent users reliably"
      },
      {
        title: "Live Video Editor",
        description: "Built live video editor converting TV feeds into multiple quality HLS DVR streams with AI-powered ad removal and automatic clip generation.",
        impact: "70% reduction in video creation time"
      },
      {
        title: "CMS Migration",
        description: "Contributed to CMS backend migration from PHP to Golang, enhancing API response times and system efficiency.",
        impact: "Improved API performance and system reliability"
      }
    ],
    skills: ["Golang", "PHP", "Apache Kafka", "HLS", "AI Integration"]
  },
  {
    title: "Software Developer Intern",
    company: "Times Internet Limited",
    period: "January 2020 – June 2020", 
    location: "Noida, India",
    achievements: [
      {
        title: "Video-to-Text Transcriber",
        description: "Developed Golang-based transcription system to enhance video search, subtitles, and recommendation algorithms.",
        impact: "Enhanced video discoverability and accessibility"
      },
      {
        title: "Backup Pipeline System",
        description: "Engineered backup pipeline handling 100M+ daily records from Apache Kafka to Elasticsearch with failure alerting.",
        impact: "Reliable data processing at massive scale"
      }
    ],
    skills: ["Golang", "Apache Kafka", "Elasticsearch", "Video Processing"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading teams and delivering scalable solutions in media technology, AI, and full-stack development
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="shadow-lg border-l-4 border-l-accent hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-primary mb-2">{exp.title}</CardTitle>
                    <p className="text-xl font-semibold text-foreground">{exp.company}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <div key={achievementIndex} className="border-l-2 border-l-muted pl-6">
                    <h4 className="font-semibold text-lg text-primary mb-2 flex items-start gap-2">
                      <TrendingUp className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      {achievement.title}
                    </h4>
                    <p className="text-foreground mb-3 leading-relaxed">
                      {achievement.description}
                    </p>
                    <div className="bg-accent/10 border border-accent/20 rounded-lg p-3">
                      <p className="text-sm font-medium text-accent-foreground">
                        <strong>Impact:</strong> {achievement.impact}
                      </p>
                    </div>
                  </div>
                ))}
                
                <div className="pt-4">
                  <p className="text-sm font-medium text-muted-foreground mb-3">Technologies Used:</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;