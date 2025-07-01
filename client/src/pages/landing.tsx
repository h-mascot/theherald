import { motion } from "framer-motion";
import heraldLogo from "@assets/herald_1751364333182.png";
import backgroundImage from "@assets/ChatGPT Image Jul 1, 2025, 11_19_14 AM_1751365160690.png";

export default function Landing() {

  return (
    <div 
      className="min-h-screen text-primary"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >


      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-white bg-opacity-60"></div>
        <div className="max-w-4xl mx-auto px-6 text-center z-10">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <img 
              src={heraldLogo} 
              alt="Herald Logo" 
              className="mx-auto h-24 md:h-32 w-auto"
            />
          </motion.div>
          <motion.h1 
            className="font-serif text-6xl md:text-8xl font-bold mb-8 text-herald-blue"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Ye are gods.
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl font-light mb-8 text-subtext leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            We're catalyzing a world of abundance and unconstrained human achievement.
          </motion.p>
          <motion.p 
            className="text-lg md:text-xl font-light mb-12 text-subtext leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Building the future, one bold venture at a time—across AI, SpaceTech, bio-computing, and next-gen frontiers.
          </motion.p>

        </div>
        
        {/* Floating geometric elements */}
        <div className="absolute top-1/4 left-10 w-4 h-4 border border-herald-blue opacity-30 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-3/4 right-20 w-6 h-6 border border-herald-blue opacity-40 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-herald-blue opacity-50 animate-float" style={{animationDelay: '3s'}}></div>
      </section>
    </div>
  );
}
