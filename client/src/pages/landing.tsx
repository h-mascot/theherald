import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
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

interface EmailSignupData {
  email: string;
}

export default function Landing() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const emailSignupMutation = useMutation({
    mutationFn: async (data: EmailSignupData) => {
      return await apiRequest("POST", "/api/email-signup", data);
    },
    onSuccess: () => {
      toast({
        title: "Welcome to the future!",
        description: "You've successfully joined our watchlist.",
      });
      setEmail("");
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    emailSignupMutation.mutate({ email: email.trim() });
  };

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
      color: "text-divine-gold"
    },
    {
      icon: Dna,
      title: "Human Enhancement",
      description: "Unlocking the full potential of human biology and consciousness",
      color: "text-ethereal-blue"
    },
    {
      icon: Rocket,
      title: "Space & Planetary Tech",
      description: "Building infrastructure for humanity's expansion beyond Earth",
      color: "text-starlight"
    },
    {
      icon: Zap,
      title: "Post-Scarcity Systems",
      description: "Creating abundance through revolutionary resource management",
      color: "text-divine-gold"
    },
    {
      icon: Users,
      title: "Sci-Fi Inspired Futures",
      description: "Turning imagination into reality through breakthrough innovation",
      color: "text-ethereal-blue"
    },
    {
      icon: Infinity,
      title: "Beyond Limits",
      description: "Exploring possibilities that transcend current understanding",
      color: "text-starlight"
    }
  ];

  return (
    <div className="cosmic-bg min-h-screen text-starlight">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-serif text-2xl font-bold text-gradient">
              The Herald
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#vision" className="text-silver-mist hover:text-starlight transition-colors duration-300">Vision</a>
              <a href="#focus" className="text-silver-mist hover:text-starlight transition-colors duration-300">Focus</a>
              <a href="#manifesto" className="text-silver-mist hover:text-starlight transition-colors duration-300">Manifesto</a>
              <a href="#contact" className="text-silver-mist hover:text-starlight transition-colors duration-300">Contact</a>
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
            className="text-xl md:text-2xl font-light mb-12 text-silver-mist leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            We're catalyzing a world of abundance, agency, and awe.
          </motion.p>
          <motion.div 
            className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-divine-gold text-cosmic-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Join the Watchlist
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection('vision')}
              className="border border-starlight text-starlight px-8 py-4 rounded-lg font-semibold hover:bg-starlight hover:text-cosmic-black transition-all duration-300"
            >
              Learn More
            </Button>
          </motion.div>
        </div>
        
        {/* Floating geometric elements */}
        <div className="absolute top-1/4 left-10 w-4 h-4 border border-starlight opacity-30 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-3/4 right-20 w-6 h-6 border border-ethereal-blue opacity-40 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-divine-gold opacity-50 animate-float" style={{animationDelay: '3s'}}></div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-gradient">
                Shaping Tomorrow
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-silver-mist">
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
                    <div className="w-3 h-3 bg-divine-gold rounded-full"></div>
                    <span className="text-starlight">Catalyzing Innovation</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-ethereal-blue rounded-full"></div>
                    <span className="text-starlight">Building the Future</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-starlight rounded-full"></div>
                    <span className="text-starlight">Empowering Creators</span>
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
            <p className="text-xl text-silver-mist max-w-2xl mx-auto">
              Pioneering technologies that push the boundaries of human potential
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <Card key={index} className="glass-effect rounded-xl p-8 text-center hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105">
                <div className={`text-4xl mb-4 ${area.color}`}>
                  <area.icon className="mx-auto w-12 h-12" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-starlight">{area.title}</h3>
                <p className="text-silver-mist text-sm">{area.description}</p>
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
            <cite className="text-silver-mist text-lg">— The Herald</cite>
            
            <div className="mt-16 pt-8 border-t border-starlight border-opacity-20">
              <p className="font-serif text-2xl md:text-3xl font-semibold text-divine-gold">
                Ye are gods. Act like it.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Email Capture Section */}
      <section id="contact" className="py-24 relative">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-gradient">
            Stay Updated
          </h2>
          <p className="text-xl text-silver-mist mb-12">
            Join our community as we build the future
          </p>
          
          <form onSubmit={handleEmailSubmit} className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 bg-cosmic-black border border-starlight border-opacity-30 rounded-lg text-starlight placeholder-silver-mist focus:border-divine-gold focus:outline-none focus:ring-2 focus:ring-divine-gold focus:ring-opacity-50 transition-all duration-300"
                required
              />
              <Button 
                type="submit"
                disabled={emailSignupMutation.isPending}
                className="px-8 py-4 bg-divine-gold text-cosmic-black rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {emailSignupMutation.isPending ? "Joining..." : "Join Watchlist"}
              </Button>
            </div>
            <p className="text-sm text-silver-mist opacity-70">
              We respect your privacy. No spam, just future updates.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-starlight border-opacity-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <div className="font-serif text-2xl font-bold text-gradient mb-2">
                The Herald
              </div>
              <p className="text-silver-mist">
                © 2025 The Herald • Designed for the next civilization
              </p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-silver-mist hover:text-divine-gold transition-colors duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-silver-mist hover:text-divine-gold transition-colors duration-300">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-silver-mist hover:text-divine-gold transition-colors duration-300">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
