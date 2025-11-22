import { Target, LifeBuoy, Calendar } from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      icon: Target,
      number: "1",
      title: "Reach out when leads actually warm up",
      description: "Stop guessing. Start timing.",
    },
    {
      icon: LifeBuoy,
      number: "2",
      title: "Rescue silent deals",
      description: "Get notified the moment they revisit your site.",
    },
    {
      icon: Calendar,
      number: "3",
      title: "Prioritize your day automatically",
      description: "Every morning: a fresh list of leads that matter today.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-16">
            Use Cases
          </h2>
          
          <div className="space-y-8">
            {useCases.map((useCase, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-secondary/50 border border-border hover:shadow-card transition-all flex items-start gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <useCase.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-bold text-primary">#{useCase.number}</span>
                    <h3 className="text-2xl font-bold text-foreground">{useCase.title}</h3>
                  </div>
                  <p className="text-lg text-muted-foreground">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
