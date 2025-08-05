import { Header } from "@/components/ui/header"
import { Footer } from "@/components/ui/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, FileText, Globe, Languages, Briefcase, Home, ArrowRight } from "lucide-react"
import { useCountry } from "@/context/CountryContext"

const services = [
  {
    icon: GraduationCap,
    title: "Admission Support",
    description: "Complete guidance for university applications, document preparation, and admission process",
    cta: "Explore",
    highlight: true
  },
  {
    icon: Globe,
    title: "Visa Guidance", 
    description: "Step-by-step visa application support with document review and interview preparation",
    cta: "Learn More",
    highlight: false
  },
  {
    icon: FileText,
    title: "SOP & LOR Help",
    description: "AI-powered assistance for crafting compelling statements and recommendation letters",
    cta: "Explore",
    highlight: true
  },
  {
    icon: Languages,
    title: "Language Training",
    description: "Comprehensive language courses to help you succeed in your destination country",
    cta: "Get Started",
    highlight: false
  },
  {
    icon: Home,
    title: "Accommodation & Post-Arrival Help",
    description: "Housing assistance and settling-in support for a smooth transition abroad",
    cta: "Book Help",
    highlight: false
  }
]

export default function Services() {
  const { showWorkInGermany } = useCountry()

  const jobAssistanceService = {
    icon: Briefcase,
    title: "Job Assistance (Germany 🇩🇪)",
    description: "Career guidance, job search support, and networking opportunities in Germany",
    cta: "Know More",
    highlight: true
  }

  const allServices = showWorkInGermany ? [...services, jobAssistanceService] : services

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="gradient-hero py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Your One-Stop Study Abroad Partner</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From admission to arrival, we provide comprehensive support for every step of your international education journey
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allServices.map((service, index) => {
                const Icon = service.icon
                return (
                  <Card key={index} className={`card-hover group ${service.highlight ? 'ring-2 ring-secondary' : ''}`}>
                    <CardHeader>
                      <div className="flex items-center justify-center w-16 h-16 bg-secondary/20 rounded-xl mb-4">
                        <Icon className="w-8 h-8 text-secondary" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <Button 
                        className={`w-full group-hover:scale-105 transition-transform ${
                          service.highlight ? 'btn-tiger-eye' : 'btn-columbia-blue'
                        }`}
                      >
                        {service.cta}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Book a consultation with our expert counselors
            </p>
            <Button size="lg" className="btn-tiger-eye">
              Book One-on-One Call
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}