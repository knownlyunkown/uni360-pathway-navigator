import { Card, CardContent } from "@/components/ui/card"
import { FileText, CheckCircle, Send, Plane } from "lucide-react"

const steps = [
  {
    step: 1,
    title: "Upload Documents",
    description: "Complete your profile and upload all required academic documents securely to your dashboard.",
    icon: FileText,
    color: "text-blue-600"
  },
  {
    step: 2,
    title: "APS Submission & Approval",
    description: "Our experts handle your APS application submission and guide you through the approval process.",
    icon: CheckCircle,
    color: "text-green-600"
  },
  {
    step: 3,
    title: "University Applications",
    description: "Apply to multiple universities with personalized SOP/LOR using our AI-powered writing tools.",
    icon: Send,
    color: "text-purple-600"
  },
  {
    step: 4,
    title: "Visa & Travel Prep",
    description: "Get visa guidance, blocked account assistance, and flight booking support for your journey.",
    icon: Plane,
    color: "text-orange-600"
  }
]

export function HowItWorks() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your journey to studying in Germany, simplified into four easy steps with expert guidance at every stage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              <Card className="step-card">
                <div className="step-number">
                  {step.step}
                </div>
                
                <CardContent className="pt-8">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-muted mb-4 ${step.color}`}>
                    <step.icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {/* Connector Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-border z-10">
                  <div className="absolute right-0 top-1/2 w-2 h-2 bg-secondary transform rotate-45 -translate-y-1/2"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Timeline for mobile */}
        <div className="lg:hidden mt-12">
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border transform -translate-x-1/2"></div>
            {steps.map((step, index) => (
              <div key={step.step} className="relative flex items-center justify-center py-4">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-sm font-bold text-secondary-foreground z-10">
                  {step.step}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}