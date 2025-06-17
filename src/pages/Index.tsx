
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import ComparisonSection from "@/components/ComparisonSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <HeroSection />
      <section id="funcionalidades">
        <FeaturesSection />
      </section>
      <section id="como-funciona">
        <HowItWorksSection />
      </section>
      <section id="planos">
        <PricingSection />
      </section>
      <ComparisonSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
