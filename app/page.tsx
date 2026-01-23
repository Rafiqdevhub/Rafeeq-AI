import { BackgroundGradient } from "@/components/landing/BackgroundGradient";
import CTASection from "@/components/landing/CTASection";
import FeaturesSection from "@/components/landing/FeatureSection";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorksSection from "@/components/landing/HowItWorkSection";
import PricingSection from "@/components/landing/PricingSection";
import { MotionDiv } from "@/components/ui/motion-div";
import React from "react";

const Home = () => {
  return (
    <div className="relative min-h-screen">
      <BackgroundGradient />
      <div className="relative z-10">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <HeroSection />
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <FeaturesSection />
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <HowItWorksSection />
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <PricingSection />
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <CTASection />
        </MotionDiv>
      </div>
    </div>
  );
};

export default Home;
