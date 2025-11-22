import { Quote } from "lucide-react";

const SocialProof = () => {
  const testimonials = [
    {
      quote: "Signals helped us get 3 extra meetings in our first week — same outbound volume, better targeting.",
      author: "SDR Lead, B2B SaaS",
    },
    {
      quote: "Finally, a way to know which leads are actually ready to talk. Game-changer for our team's efficiency.",
      author: "VP of Sales, Enterprise Software",
    },
  ];

  const logos = [
    "Company A",
    "Company B",
    "Company C",
    "Company D",
    "Company E",
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-muted-foreground mb-12">
            Trusted by high-performing teams
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-20 opacity-60">
            {logos.map((logo, index) => (
              <div 
                key={index}
                className="text-xl font-bold text-foreground px-6 py-3 rounded-lg bg-background/50"
              >
                {logo}
              </div>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-elegant transition-all"
              >
                <Quote className="h-10 w-10 text-primary mb-6" />
                <p className="text-lg text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <p className="text-sm font-semibold text-muted-foreground">
                  — {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
