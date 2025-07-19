import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  FileCheck, 
  Bot, 
  Shield, 
  CreditCard, 
  Users, 
  Headphones,
  Clock,
  Star
} from "lucide-react"

const features = [
  {
    icon: FileCheck,
    title: "Document Tracking",
    description: "Real-time status updates on all your application documents with secure cloud storage.",
    badge: "Secure"
  },
  {
    icon: Shield,
    title: "APS Support",
    description: "Complete APS application assistance with expert review and submission guidance.",
    badge: "Expert Guided"
  },
  {
    icon: Bot,
    title: "AI SOP/LOR Tool",
    description: "Generate personalized Statement of Purpose and Letters of Recommendation using AI.",
    badge: "AI Powered"
  },
  {
    icon: Clock,
    title: "Visa Readiness",
    description: "Step-by-step visa preparation with appointment booking and documentation support.",
    badge: "Fast Track"
  },
  {
    icon: CreditCard,
    title: "Blocked Account",
    description: "Simplified blocked account setup with partner banks for visa requirements.",
    badge: "Bank Partner"
  },
  {
    icon: Users,
    title: "Family Support",
    description: "Guidance for family visa applications and accommodation assistance.",
    badge: "Comprehensive"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock expert support via chat, call, and video consultation.",
    badge: "Always Available"
  },
  {
    icon: Star,
    title: "Success Guarantee",
    description: "95% visa success rate with personalized mentorship throughout your journey.",
    badge: "Proven Results"
  }
]

export function WhyUni360() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose UNI 360°?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide end-to-end support for your German study abroad journey with cutting-edge technology and expert guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary/20 group-hover:bg-secondary/30 transition-colors">
                    <feature.icon className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Students Placed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-sm text-muted-foreground">Visa Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">University Partners</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Expert Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}