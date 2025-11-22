import { Clock, TrendingDown, Shuffle, Database } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: Clock,
      text: "Reps waste hours chasing leads with zero intent",
    },
    {
      icon: TrendingDown,
      text: "Deals go dark without warning",
    },
    {
      icon: Shuffle,
      text: "Teams rely on luck instead of signals",
    },
    {
      icon: Database,
      text: "Data is scattered across LinkedIn, job posts, websites, tools…",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Outbound isn't broken.
          </h2>
          <p className="text-2xl md:text-4xl font-bold text-foreground mb-12">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Reaching out at the wrong moment is.
            </span>
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-secondary/50 border border-border hover:shadow-card transition-all"
              >
                <problem.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground text-left">{problem.text}</p>
              </div>
            ))}
          </div>
          
          <div className="inline-block px-8 py-4 bg-gradient-primary rounded-xl">
            <p className="text-xl md:text-2xl font-bold text-white">
              Intent Signals fix the timing gap.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
