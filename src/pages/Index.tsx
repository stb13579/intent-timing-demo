import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SignalsGrid from "@/components/SignalsGrid";
import UseCases from "@/components/UseCases";
import SocialProof from "@/components/SocialProof";
import FeatureBreakdown from "@/components/FeatureBreakdown";
import Resources from "@/components/Resources";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemSection />
      <SignalsGrid />
      <UseCases />
      <SocialProof />
      <FeatureBreakdown />
      <Resources />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
