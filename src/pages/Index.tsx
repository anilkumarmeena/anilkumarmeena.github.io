import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Awards from "@/components/Awards";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Experience />
      <Skills />
      <Awards />
      <Education />
      <Contact />
    </div>
  );
};

export default Index;
