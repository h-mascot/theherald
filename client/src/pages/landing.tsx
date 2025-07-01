import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  Brain, 
  Dna, 
  Rocket, 
  Zap, 
  Users, 
  Infinity,
  Linkedin,
  Twitter,
  Mail
} from "lucide-react";

export default function Landing() {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Add smooth scrolling behavior
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href')?.substring(1);
        if (targetId) {
          scrollToSection(targetId);
        }
      });
    });

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);

  const focusAreas = [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description: "Advancing the frontiers of machine cognition and human-AI collaboration",
      color: "text-cta"
    },
    {
      icon: Dna,
      title: "Human Enhancement",
      description: "Unlocking the full potential of human biology and consciousness",
      color: "text-accent"
    },
    {
      icon: Rocket,
      title: "Space & Planetary Tech",
      description: "Building infrastructure for humanity's expansion beyond Earth",
      color: "text-cta"
    },
    {
      icon: Zap,
      title: "Post-Scarcity Systems",
      description: "Creating abundance through revolutionary resource management",
      color: "text-accent"
    },
    {
      icon: Users,
      title: "Sci-Fi Inspired Futures",
      description: "Turning imagination into reality through breakthrough innovation",
      color: "text-cta"
    },
    {
      icon: Infinity,
      title: "Beyond Limits",
      description: "Exploring possibilities that transcend current understanding",
      color: "text-accent"
    }
  ];

  return (
    <div className="calm-bg min-h-screen text-primary">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-serif text-2xl font-bold text-gradient">
              The Herald
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#vision" className="text-subtext hover:text-primary transition-colors duration-300">Vision</a>
              <a href="#focus" className="text-subtext hover:text-primary transition-colors duration-300">Focus</a>
              <a href="#manifesto" className="text-subtext hover:text-primary transition-colors duration-300">Manifesto</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-4xl mx-auto px-6 text-center z-10">
          <motion.h1 
            className="font-serif text-6xl md:text-8xl font-bold mb-8 text-gradient"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Ye are gods.
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl font-light mb-8 text-subtext leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            We're catalyzing a world of abundance and unconstrained human achievement.
          </motion.p>
          <motion.p 
            className="text-lg md:text-xl font-light mb-12 text-subtext leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Building the future, one bold venture at a time—across AI, SpaceTech, bio-computing, and next-gen frontiers.
          </motion.p>
          <motion.div 
            className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Button 
              variant="outline"
              onClick={() => scrollToSection('vision')}
              className="btn-outline px-8 py-4 rounded-lg font-semibold"
            >
              Learn More
            </Button>
          </motion.div>
        </div>
        
        {/* Floating geometric elements */}
        <div className="absolute top-1/4 left-10 w-4 h-4 border border-accent opacity-30 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-3/4 right-20 w-6 h-6 border border-accent opacity-40 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-cta opacity-50 animate-float" style={{animationDelay: '3s'}}></div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-gradient">
                Shaping Tomorrow
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-subtext">
                <p>
                  The Herald is a future-facing holding company shaping the world to come. 
                  We incubate and invest in bold ideas across AI, synthetic biology, space, 
                  and other science-fiction futures.
                </p>
                <p>
                  We believe the next renaissance is near—and it begins with reclaiming 
                  our divinity as creators.
                </p>
              </div>
            </div>
            <div className="relative">
              <Card className="glass-effect rounded-2xl p-8 animate-float">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-cta rounded-full"></div>
                    <span className="text-primary">Catalyzing Innovation</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <span className="text-primary">Building the Future</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-secondary rounded-full"></div>
                    <span className="text-primary">Empowering Creators</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section id="focus" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gradient">
              We build and back
            </h2>
            <p className="text-xl text-subtext max-w-2xl mx-auto">
              Pioneering technologies that push the boundaries of human potential
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <Card key={index} className="glass-effect rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className={`text-4xl mb-4 ${area.color}`}>
                  <area.icon className="mx-auto w-12 h-12" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-primary">{area.title}</h3>
                <p className="text-subtext text-sm">{area.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section id="manifesto" className="py-24 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Card className="glass-effect rounded-2xl p-12 md:p-16">
            <blockquote className="font-serif text-3xl md:text-4xl font-light mb-8 text-gradient leading-relaxed">
              "The future is not something to predict — it's something to proclaim."
            </blockquote>
            <cite className="text-subtext text-lg">— The Herald</cite>
            
            <div className="mt-16 pt-8 border-t border-primary border-opacity-20">
              <p className="font-serif text-2xl md:text-3xl font-semibold text-cta">
                Ye are gods. Act like it.
              </p>
            </div>
          </Card>
        </div>
      </section>



      {/* Footer */}
      <footer className="py-16 border-t border-primary border-opacity-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <div className="font-serif text-2xl font-bold text-gradient mb-2">
                The Herald
              </div>
              <p className="text-subtext">
                © 2025 The Herald • Designed for the next civilization
              </p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-subtext hover:text-cta transition-colors duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-subtext hover:text-cta transition-colors duration-300">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-subtext hover:text-cta transition-colors duration-300">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
