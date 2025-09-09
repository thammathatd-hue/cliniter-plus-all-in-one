import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import PainSolutionSection from "@/components/PainSolutionSection";
import TargetUsersSection from "@/components/TargetUsersSection";
import FeaturesSection from "@/components/FeaturesSection";
import DemoFlowSection from "@/components/DemoFlowSection";
import BenefitsSection from "@/components/BenefitsSection";
import PricingSection from "@/components/PricingSection";
import EquipmentSection from "@/components/EquipmentSection";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSection from "@/components/FAQSection";
import ArticlesSection from "@/components/ArticlesSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Navigation />
      <main>
        <HeroSection />
        <SocialProofSection />
        <PainSolutionSection />
        <TargetUsersSection />
        <FeaturesSection />
        <DemoFlowSection />
        <BenefitsSection />
        <PricingSection />
        <EquipmentSection />
        <ReviewsSection />
        <FAQSection />
        <ArticlesSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
