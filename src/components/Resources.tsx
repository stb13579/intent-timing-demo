import { Button } from "@/components/ui/button";
import { Download, BookOpen } from "lucide-react";

const Resources = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="p-10 rounded-2xl bg-card border border-border shadow-elegant text-center">
            <BookOpen className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Intent-First Outbound Playbook
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              A 6-step method to book more meetings with better timing.
            </p>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              <Download className="mr-2 h-5 w-5" />
              Download Playbook
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
