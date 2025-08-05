import { Header } from "@/components/ui/header"
import { HeroSection } from "@/components/ui/hero-section"
import { UniversityShowcase } from "@/components/ui/university-showcase"
import { HowItWorks } from "@/components/ui/how-it-works"
import { WhyUni360 } from "@/components/ui/why-uni360"
import { Testimonials } from "@/components/ui/testimonials"
import { CtaBanner } from "@/components/ui/cta-banner"
import { Footer } from "@/components/ui/footer"
import { Chatbot } from "@/components/ui/chatbot"
import { TopUniversityHighlights } from "@/components/ui/top-university-highlights"
import { WorkInGermanySection } from "@/components/ui/work-in-germany-section"
import { Support360Section } from "@/components/ui/support-360-section"
import { useCountry } from "@/context/CountryContext"

const Index = () => {
  const { showWorkInGermany } = useCountry()

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <section id="top-universities">
          <TopUniversityHighlights />
        </section>
        {showWorkInGermany && (
          <section id="work-in-germany">
            <WorkInGermanySection />
          </section>
        )}
        <section id="360-support">
          <Support360Section />
        </section>
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
      <Chatbot />
    </div>
  );
};

export default Index;
