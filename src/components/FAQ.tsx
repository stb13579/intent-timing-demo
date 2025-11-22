import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Where do signals come from?",
      answer: "Signals are aggregated from multiple sources including LinkedIn activity, job posting sites, funding databases, website analytics, and public business information. We continuously monitor these sources to provide real-time intent data.",
    },
    {
      question: "How accurate is website intent?",
      answer: "Website intent tracking is highly accurate and shows real visitor behavior. We track page visits, time spent, and specific actions taken on your site. This data is processed in real-time to identify high-intent prospects.",
    },
    {
      question: "Does this replace lead scoring?",
      answer: "Intent Signals complement traditional lead scoring by adding timing intelligence. While lead scoring tells you who might be a good fit, Intent Signals tell you when they're actually ready to engage. Use them together for best results.",
    },
    {
      question: "Is it included in my plan?",
      answer: "Intent Signals is available on all Pro and Enterprise plans. Pricing details and specific feature availability depend on your subscription tier. Contact our team to learn more about which plan works best for your needs.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-16">
            Frequently Asked Questions
          </h2>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 bg-card shadow-card hover:shadow-elegant transition-all"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
