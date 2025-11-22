import { Button } from "@/components/ui/button";
import { Zap, MousePointer, Workflow, Link } from "lucide-react";

const FeatureBreakdown = () => {
  const features = [
    {
      icon: Zap,
      text: "See signals as they happen",
    },
    {
      icon: MousePointer,
      text: "Add to campaign in 1 click",
    },
    {
      icon: Workflow,
      text: "Build automations around intent",
    },
    {
      icon: Link,
      text: "Works with all your existing sequences",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            One feed. Zero tab-switching.
          </h2>
          <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-16">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Instant action.
            </span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-6 rounded-xl bg-secondary/50 border border-border hover:shadow-card transition-all"
              >
                <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <p className="text-lg font-semibold text-foreground text-left">{feature.text}</p>
              </div>
            ))}
          </div>
          
          <Button size="lg" className="text-lg px-8 py-6 shadow-elegant">
            Try Intent Signals
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureBreakdown;
