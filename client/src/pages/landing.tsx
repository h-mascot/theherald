import { motion } from "framer-motion";

export default function Landing() {

  return (
    <div className="calm-bg min-h-screen text-primary">


      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
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

        </div>
        
        {/* Floating geometric elements */}
        <div className="absolute top-1/4 left-10 w-4 h-4 border border-accent opacity-30 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-3/4 right-20 w-6 h-6 border border-accent opacity-40 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-cta opacity-50 animate-float" style={{animationDelay: '3s'}}></div>
      </section>
    </div>
  );
}
