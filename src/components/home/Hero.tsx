
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#F7F7F7] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent" />
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-fade-in">
            Discover Our Collection
          </h1>
          
          <p className="text-xl text-gray-600 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Carefully curated products for the modern lifestyle. Experience quality, design, and innovation.
          </p>
          
          <div className="flex justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full hover:bg-gray-900 transition-colors"
            >
              Shop Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100" />
      </div>
    </section>
  );
};

export default Hero;
