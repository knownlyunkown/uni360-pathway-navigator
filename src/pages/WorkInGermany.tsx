import { Header } from "@/components/ui/header"
import { Footer } from "@/components/ui/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, FileText, Star, Users, ArrowRight } from "lucide-react"

const eligibilityPoints = [
  "Bachelor's degree or higher qualification",
  "Recognized professional qualification",
  "Language skills (German A1 or English B2)",
  "Age under 35 years (additional points)",
  "Professional experience (minimum 2 years)"
]

const benefits = [
  "Search for employment for up to 1 year",
  "Bring your family members",
  "Access to German job market",
  "Path to permanent residence",
  "Social security benefits"
]

const documents = [
  "Educational certificates",
  "Professional qualification documents", 
  "Language proficiency certificates",
  "CV in German format",
  "Motivation letter",
  "Financial proof (blocked account)"
]

export default function WorkInGermany() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="gradient-hero py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold mb-6">
                  Start Working in Germany with the Chancenkarte 🇩🇪
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  The Opportunity Card (Chancenkarte) opens doors to employment opportunities in Germany for skilled professionals worldwide.
                </p>
                <Button size="lg" className="btn-tiger-eye">
                  Apply via UNI 360°
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              
              <div className="relative">
                <div className="text-8xl text-center mb-4">🇩🇪</div>
                <div className="flex items-center justify-center gap-4 text-4xl">
                  💼 🏢 🎯
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is Chancenkarte */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">What is Chancenkarte?</h2>
              
              <Card className="p-8 mb-12">
                <CardContent>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    The Chancenkarte (Opportunity Card) is Germany's new points-based immigration system that allows skilled workers from non-EU countries to enter Germany to search for employment. It's designed to address Germany's skilled labor shortage by attracting talented professionals from around the world.
                  </p>
                </CardContent>
              </Card>

              {/* Stats */}
              <div className="grid md:grid-cols-3 gap-6 mb-16">
                <Card className="text-center p-6">
                  <div className="text-3xl font-bold text-tiger-eye mb-2">6 Points</div>
                  <div className="text-sm text-muted-foreground">Minimum Required</div>
                </Card>
                <Card className="text-center p-6">
                  <div className="text-3xl font-bold text-tiger-eye mb-2">1 Year</div>
                  <div className="text-sm text-muted-foreground">Validity Period</div>
                </Card>
                <Card className="text-center p-6">
                  <div className="text-3xl font-bold text-tiger-eye mb-2">€1000+</div>
                  <div className="text-sm text-muted-foreground">Monthly Income Proof</div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility & Benefits */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Eligibility */}
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    Eligibility Checklist
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {eligibilityPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-tiger-eye rounded-full mt-2 flex-shrink-0"></div>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Star className="w-6 h-6 text-columbia-blue" />
                    Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-columbia-blue rounded-full mt-2 flex-shrink-0"></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Documents Required */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">Documents Required</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {documents.map((doc, index) => (
                  <Card key={index} className="p-6 text-center card-hover">
                    <FileText className="w-8 h-8 text-secondary mx-auto mb-4" />
                    <h3 className="font-medium">{doc}</h3>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Apply?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let UNI 360° guide you through the Chancenkarte application process with expert support every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-tiger-eye">
                Apply via UNI 360°
              </Button>
              <Button size="lg" variant="outline" className="border-primary hover:bg-primary hover:text-primary-foreground">
                Book Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}