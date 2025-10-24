import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, TrendingUp, Terminal, Database, Cloud, Zap } from "lucide-react";

const experiences = [
  {
    title: "Tech Lead",
    company: "Times Internet Limited",
    period: "March 2022 – Present",
    location: "Noida, India",
    icon: Terminal,
    achievements: [
      {
        title: "Webstudio Development",
        description: "Led development of real-time broadcasting software with TV-like experience, including conferencing system and mobile news reporting features. Used by TOI, NBT, MH TIMES.",
        impact: "Reduced costs by $200 per news segment vs satellite setups",
        metric: "$200K+ saved annually",
        code: "webstudio.deploy()"
      },
      {
        title: "AI-Powered Article-to-Video Software",
        description: "Developed automated video creation system using OpenAI, Node.js, Golang, and FFmpeg for processing in-house articles.",
        impact: "40% increase in content base with automated video generation",
        metric: "40% content increase",
        code: "ai.generateVideo(article)"
      },
      {
        title: "Central Monitoring System",
        description: "Architected in-house monitoring solution with React, Golang, Kafka, Elasticsearch for real-time health monitoring and automated failure recovery.",
        impact: "$50K annual cost savings replacing external solutions",
        metric: "$50K saved/year",
        code: "monitor.healthCheck()"
      }
    ],
    skills: ["Golang", "React", "Node.js", "FFmpeg", "OpenAI", "Kafka", "Elasticsearch"]
  },
  {
    title: "Full Stack Developer",
    company: "Times Internet Limited",
    period: "July 2021 – February 2022",
    location: "Noida, India",
    icon: Database,
    achievements: [
      {
        title: "Cleo Player Development",
        description: "Built in-house media player using TypeScript and HLS.js supporting live, Simulive, and VOD playback with encrypted media and subtitle support.",
        impact: "50% cost reduction with manifest-less technology",
        metric: "50% cost reduction",
        code: "player.init(hlsConfig)"
      },
      {
        title: "Mediaengine Backend",
        description: "Developed 24/7 live streaming backend with RTMP pub-sub, GStreamer transcoding, FFmpeg HLS transmuxing, and automatic failure recovery.",
        impact: "Reliable streaming with social platform simulcasting",
        metric: "99.9% uptime",
        code: "stream.transcode(rtmp)"
      },
      {
        title: "Digital Asset Management",
        description: "Built media transcoding and transmuxing system with resumable uploads, video DRM, subtitles, and multi-audio support.",
        impact: "50% reduction in processing time with lower failure rates",
        metric: "50% faster processing",
        code: "asset.process(media)"
      }
    ],
    skills: ["TypeScript", "Golang", "GStreamer", "FFmpeg", "HLS.js", "RTMP"]
  },
  {
    title: "Software Developer",
    company: "Times Internet Limited", 
    period: "July 2020 – June 2021",
    location: "Noida, India",
    icon: Cloud,
    achievements: [
      {
        title: "High-Scale Event Backend",
        description: "Developed horizontally scalable backend managing millions of concurrent users from TOI, ET, and NBT with real-time interactions.",
        impact: "Handled millions of daily concurrent users reliably",
        metric: "Millions of users",
        code: "backend.scale(users)"
      },
      {
        title: "Live Video Editor",
        description: "Built live video editor converting TV feeds into multiple quality HLS DVR streams with AI-powered ad removal and automatic clip generation.",
        impact: "70% reduction in video creation time",
        metric: "70% time saved",
        code: "editor.processLive(feed)"
      },
      {
        title: "CMS Migration",
        description: "Contributed to CMS backend migration from PHP to Golang, enhancing API response times and system efficiency.",
        impact: "Improved API performance and system reliability",
        metric: "3x faster APIs",
        code: "cms.migrate(golang)"
      }
    ],
    skills: ["Golang", "PHP", "Apache Kafka", "HLS", "AI Integration"]
  },
  {
    title: "Software Developer Intern",
    company: "Times Internet Limited",
    period: "January 2020 – June 2020", 
    location: "Noida, India",
    icon: Zap,
    achievements: [
      {
        title: "Video-to-Text Transcriber",
        description: "Developed Golang-based transcription system to enhance video search, subtitles, and recommendation algorithms.",
        impact: "Enhanced video discoverability and accessibility",
        metric: "100M+ records/day",
        code: "transcribe.process(video)"
      },
      {
        title: "Backup Pipeline System",
        description: "Engineered backup pipeline handling 100M+ daily records from Apache Kafka to Elasticsearch with failure alerting.",
        impact: "Reliable data processing at massive scale",
        metric: "99.99% reliability",
        code: "pipeline.backup(kafka)"
      }
    ],
    skills: ["Golang", "Apache Kafka", "Elasticsearch", "Video Processing"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 tech-grid opacity-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border rounded-lg px-4 py-2 mb-6">
            <Terminal className="h-4 w-4 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">experience.timeline</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading teams and delivering <span className="text-primary font-semibold">scalable solutions</span> in media technology, AI, and full-stack development
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-12">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <Card 
                key={index} 
                className="bg-card/60 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow group animate-slide-in-left"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="pb-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 p-3 rounded-lg group-hover:bg-primary/30 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-2">
                          {exp.title}
                        </CardTitle>
                        <p className="text-xl font-semibold text-foreground">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 rounded-lg px-3 py-1">
                        <Calendar className="h-4 w-4" />
                        <span className="font-mono">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 rounded-lg px-3 py-1">
                        <MapPin className="h-4 w-4" />
                        <span className="font-mono">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-8">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="border-l-2 border-l-primary/30 pl-6 hover:border-l-primary/60 transition-colors">
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="font-semibold text-lg text-foreground flex items-start gap-2">
                          <TrendingUp className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                          {achievement.title}
                        </h4>
                        <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30 font-mono text-xs">
                          {achievement.metric}
                        </Badge>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {achievement.description}
                      </p>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                          <p className="text-sm font-medium text-accent mb-1">Impact:</p>
                          <p className="text-sm text-foreground">{achievement.impact}</p>
                        </div>
                        <div className="code-block">
                          <p className="text-xs text-muted-foreground mb-1">// Code snippet</p>
                          <code className="text-primary text-sm">{achievement.code}</code>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="pt-6 border-t border-border/50">
                    <p className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-2">
                      <Terminal className="h-4 w-4" />
                      Technologies Used:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="outline" 
                          className="bg-card/40 border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-200 font-mono text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;