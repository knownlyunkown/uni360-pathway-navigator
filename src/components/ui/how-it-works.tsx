import { Card, CardContent } from "@/components/ui/card"
import { FileText, CheckCircle, Send, Plane, GraduationCap, FileCheck, Flag } from "lucide-react"
import { useCountry } from "@/context/CountryContext"

const germanySteps = [
  {
    step: 1,
    title: "Upload Documents",
    description: "Complete your profile and upload all required academic documents securely to your dashboard.",
    icon: FileText,
    color: "hsl(var(--primary))",
    bgColor: "hsl(var(--primary) / 0.1)"
  },
  {
    step: 2,
    title: "APS Submission & Approval",
    description: "Our experts handle your APS application submission and guide you through the approval process.",
    icon: CheckCircle,
    color: "hsl(var(--chart-2))",
    bgColor: "hsl(var(--chart-2) / 0.1)"
  },
  {
    step: 3,
    title: "University Applications",
    description: "Apply to multiple universities with personalized SOP/LOR using our AI-powered writing tools.",
    icon: Send,
    color: "hsl(var(--chart-3))",
    bgColor: "hsl(var(--chart-3) / 0.1)"
  },
  {
    step: 4,
    title: "Visa & Travel Prep",
    description: "Get visa guidance, blocked account assistance, and flight booking support for your journey.",
    icon: Plane,
    color: "hsl(var(--chart-4))",
    bgColor: "hsl(var(--chart-4) / 0.1)"
  }
]

const ukSteps = [
  {
    step: 1,
    title: "Upload Documents",
    description: "Complete your profile and upload academic transcripts, English proficiency tests, and personal documents.",
    icon: FileText,
    color: "hsl(var(--primary))",
    bgColor: "hsl(var(--primary) / 0.1)"
  },
  {
    step: 2,
    title: "UCAS & Direct Applications",
    description: "Submit applications through UCAS or directly to universities with our expert guidance and support.",
    icon: GraduationCap,
    color: "hsl(var(--chart-2))",
    bgColor: "hsl(var(--chart-2) / 0.1)"
  },
  {
    step: 3,
    title: "Offers & CAS Processing",
    description: "Receive offers, accept your choice, and get assistance with CAS (Confirmation of Acceptance for Studies).",
    icon: FileCheck,
    color: "hsl(var(--chart-3))",
    bgColor: "hsl(var(--chart-3) / 0.1)"
  },
  {
    step: 4,
    title: "Student Visa & Arrival",
    description: "Complete student visa application, financial requirements, and pre-arrival preparation support.",
    icon: Plane,
    color: "hsl(var(--chart-4))",
    bgColor: "hsl(var(--chart-4) / 0.1)"
  }
]

export function HowItWorks() {
  const { selectedCountry } = useCountry()

  const getSteps = () => {
    switch (selectedCountry) {
      case 'germany':
        return germanySteps
      case 'uk':
        return ukSteps
      case 'both':
        return [...germanySteps, ...ukSteps]
      default:
        return [...germanySteps, ...ukSteps]
    }
  }

  const getTitle = () => {
    switch (selectedCountry) {
      case 'germany':
        return "Your Journey to Germany 🇩🇪"
      case 'uk':
        return "Your Journey to UK 🇬🇧"
      case 'both':
        return "Your Study Abroad Journey"
      default:
        return "Your Study Abroad Journey"
    }
  }

  const getDescription = () => {
    switch (selectedCountry) {
      case 'germany':
        return "Follow our proven roadmap to make your German university dreams come true"
      case 'uk':
        return "Navigate your path to UK universities with our comprehensive guidance"
      case 'both':
        return "Choose your destination and follow our tailored roadmap to success"
      default:
        return "Choose your destination and follow our tailored roadmap to success"
    }
  }

  const steps = getSteps()

  const RoadmapStep = ({ step, index, isLast, totalSteps }) => (
    <div className="relative group">
      {/* Step circle */}
      <div 
        className="relative z-10 w-20 h-20 rounded-full border-4 border-background shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
        style={{ backgroundColor: step.bgColor, borderColor: step.color }}
      >
        <div className="w-full h-full rounded-full flex items-center justify-center relative overflow-hidden">
          <step.icon 
            className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
            style={{ color: step.color }}
          />
          <div 
            className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-md"
            style={{ backgroundColor: step.color }}
          >
            {step.step}
          </div>
        </div>
      </div>

      {/* Content card */}
      <div className="mt-6 p-6 bg-card rounded-lg border shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
        <h3 className="font-bold text-lg mb-2" style={{ color: step.color }}>
          {step.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {step.description}
        </p>
      </div>

      {/* Dotted connector line - curved for visual appeal */}
      {!isLast && (
        <div className="absolute top-10 left-20 w-full h-20 pointer-events-none hidden lg:block">
          <svg 
            className="w-full h-full" 
            viewBox="0 0 100 80" 
            fill="none"
            style={{ overflow: "visible" }}
          >
            <path
              d="M 0 0 Q 50 40 100 0"
              stroke="hsl(var(--border))"
              strokeWidth="2"
              strokeDasharray="5,5"
              fill="none"
              className="animate-pulse"
            />
            <circle
              cx="95"
              cy="5"
              r="3"
              fill="hsl(var(--primary))"
              className="animate-bounce"
              style={{ animationDelay: `${index * 0.2}s` }}
            />
          </svg>
        </div>
      )}
    </div>
  )

  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
            {getTitle()}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {getDescription()}
          </p>
        </div>

        {/* Germany roadmap */}
        {(selectedCountry === 'germany' || selectedCountry === 'both') && (
          <div className="mb-16">
            {selectedCountry === 'both' && (
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full border border-primary/20">
                  <span className="text-2xl">🇩🇪</span>
                  <h3 className="text-2xl font-bold text-primary">Germany Path</h3>
                </div>
              </div>
            )}
            
            <div className="relative">
              <div className="grid lg:grid-cols-4 gap-8 lg:gap-16">
                {germanySteps.map((step, index) => (
                  <RoadmapStep
                    key={`germany-${step.step}`}
                    step={step}
                    index={index}
                    isLast={index === germanySteps.length - 1}
                    totalSteps={germanySteps.length}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* UK roadmap */}
        {(selectedCountry === 'uk' || selectedCountry === 'both') && (
          <div>
            {selectedCountry === 'both' && (
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-chart-2/10 px-6 py-3 rounded-full border border-chart-2/20">
                  <span className="text-2xl">🇬🇧</span>
                  <h3 className="text-2xl font-bold text-chart-2">UK Path</h3>
                </div>
              </div>
            )}
            
            <div className="relative">
              <div className="grid lg:grid-cols-4 gap-8 lg:gap-16">
                {ukSteps.map((step, index) => (
                  <RoadmapStep
                    key={`uk-${step.step}`}
                    step={step}
                    index={index}
                    isLast={index === ukSteps.length - 1}
                    totalSteps={ukSteps.length}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mobile timeline for small screens */}
        <div className="lg:hidden mt-12">
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-chart-2 to-chart-3"></div>
            {steps.slice(0, 4).map((step, index) => (
              <div key={step.step} className="relative flex items-start gap-4 pb-8">
                <div 
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border-4 border-background shadow-lg relative z-10"
                  style={{ backgroundColor: step.bgColor, borderColor: step.color }}
                >
                  <step.icon className="w-5 h-5" style={{ color: step.color }} />
                  <div 
                    className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.step}
                  </div>
                </div>
                <div className="flex-1 bg-card p-4 rounded-lg border shadow-sm">
                  <h4 className="font-semibold mb-2" style={{ color: step.color }}>
                    {step.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}