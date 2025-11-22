import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.png";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Outbound that finally <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              knows when.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Reach out the moment your leads show intent — not days later.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
            <Button size="lg" className="text-lg px-8 py-6 shadow-elegant hover:shadow-xl transition-all">
              See my Signals
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground">
            No setup. Signals start appearing automatically.
          </p>
          
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-20 rounded-full"></div>
            <img 
              src={heroImage} 
              alt="Intent Signals Dashboard" 
              className="relative rounded-xl shadow-elegant border border-border mx-auto animate-fade-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
