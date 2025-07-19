import { Header } from "@/components/ui/header"
import { HeroSection } from "@/components/ui/hero-section"
import { UniversityShowcase } from "@/components/ui/university-showcase"
import { HowItWorks } from "@/components/ui/how-it-works"
import { WhyUni360 } from "@/components/ui/why-uni360"
import { Testimonials } from "@/components/ui/testimonials"
import { CtaBanner } from "@/components/ui/cta-banner"
import { Footer } from "@/components/ui/footer"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <section id="universities">
          <UniversityShowcase />
        </section>
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="why-us">
          <WhyUni360 />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
