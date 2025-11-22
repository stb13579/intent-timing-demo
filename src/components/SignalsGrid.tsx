import { Button } from "@/components/ui/button";
import { Briefcase, MousePointer, TrendingUp, Users, MessageSquare } from "lucide-react";

const SignalsGrid = () => {
  const signals = [
    {
      icon: Briefcase,
      title: "Hiring Signals",
      description: "They're growing or changing → perfect time to start a conversation.",
    },
    {
      icon: MousePointer,
      title: "Website Activity",
      description: "Pricing page visits. Case studies. Product comparisons. This is real interest.",
    },
    {
      icon: TrendingUp,
      title: "Funding Announcements",
      description: "New capital = new pressure to grow fast.",
    },
    {
      icon: Users,
      title: "Role Changes",
      description: "New job, new tools, new processes → new budget.",
    },
    {
      icon: MessageSquare,
      title: "LinkedIn Engagement",
      description: "Prospects talking about the problem you solve.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-16">
            What Signals You Get
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {signals.slice(0, 3).map((signal, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-elegant transition-all"
              >
                <signal.icon className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">{signal.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{signal.description}</p>
              </div>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {signals.slice(3).map((signal, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-elegant transition-all"
              >
                <signal.icon className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">{signal.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{signal.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              See real examples inside your account
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignalsGrid;
