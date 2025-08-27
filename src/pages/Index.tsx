import React, { Suspense } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

const EbookSection = React.lazy(() => import("@/components/EbookSection"));
const LipedemasSection = React.lazy(() => import("@/components/LipedemasSection"));
const AboutSection = React.lazy(() => import("@/components/AboutSection"));
const TreatmentsSection = React.lazy(() => import("@/components/TreatmentsSection"));
const TestimonialsSection = React.lazy(() => import("@/components/TestimonialsSection"));
const AppointmentSection = React.lazy(() => import("@/components/AppointmentSection"));
const Footer = React.lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen scroll-smooth">
      <Header />
      <main>
        <HeroSection />
        <Suspense fallback={<div>Loading...</div>}>
          <EbookSection />
          <LipedemasSection />
          <AboutSection />
          <TreatmentsSection />
          <TestimonialsSection />
          <AppointmentSection />
        </Suspense>
      </main>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
