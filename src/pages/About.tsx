import { Header } from "@/components/ui/header"
import { Footer } from "@/components/ui/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Testimonials } from "@/components/ui/testimonials"
import { Heart, Target, Users, Globe, ArrowRight, Star } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Student-Centric Approach",
    description: "Every decision we make puts our students' success and well-being first"
  },
  {
    icon: Target,
    title: "Excellence in Guidance",
    description: "We provide accurate, up-to-date information and personalized support"
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Building a supportive network of students, alumni, and partners"
  },
  {
    icon: Globe,
    title: "Global Opportunities",
    description: "Opening doors to world-class education and international careers"
  }
]

const partners = [
  { name: "TU Munich", logo: "🏛️" },
  { name: "Oxford University", logo: "🎓" },
  { name: "Imperial College", logo: "🏛️" },
  { name: "Heidelberg Uni", logo: "🎓" },
  { name: "Cambridge", logo: "🏛️" },
  { name: "RWTH Aachen", logo: "🎓" }
]

const stats = [
  { number: "2500+", label: "Students Guided" },
  { number: "95%", label: "Success Rate" },
  { number: "150+", label: "Partner Universities" },
  { number: "12", label: "Countries Covered" }
]

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="gradient-hero py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">About UNI 360°</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empowering students worldwide to achieve their dreams of international education through comprehensive guidance and unwavering support.
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                  <div className="space-y-4 text-lg text-muted-foreground">
                    <p>
                      Founded with a vision to democratize international education, UNI 360° emerged from the personal experiences of students who faced challenges navigating complex admission processes abroad.
                    </p>
                    <p>
                      What started as a small initiative to help fellow students has grown into a comprehensive platform serving thousands of aspiring international students across the globe.
                    </p>
                    <p>
                      Today, we pride ourselves on being more than just a consultancy – we're your partners in transformation.
                    </p>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-8xl mb-4">🌍</div>
                  <div className="text-6xl">🎓 📚 ✈️</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6">
                  <div className="text-4xl font-bold text-tiger-eye mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Mission & Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We believe every student deserves access to world-class education, regardless of their background or starting point.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <Card key={index} className="text-center p-6 card-hover">
                    <div className="flex items-center justify-center w-16 h-16 bg-secondary/20 rounded-xl mx-auto mb-4">
                      <Icon className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Student Success Stories</h2>
              <p className="text-xl text-muted-foreground">
                Hear from students who achieved their dreams with UNI 360°
              </p>
            </div>
            <Testimonials />
          </div>
        </section>

        {/* Partner Universities */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our University Partners</h2>
              <p className="text-xl text-muted-foreground">
                Collaborating with prestigious institutions worldwide
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {partners.map((partner, index) => (
                <Card key={index} className="p-6 text-center card-hover">
                  <div className="text-3xl mb-2">{partner.logo}</div>
                  <div className="text-sm font-medium">{partner.name}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to start your international education journey? Let's make your dreams a reality together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-tiger-eye">
                Start Your Journey
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary hover:bg-primary hover:text-primary-foreground">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}