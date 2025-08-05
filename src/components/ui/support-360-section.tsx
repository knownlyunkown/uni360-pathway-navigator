import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Globe, Home, Users, BookOpen, Heart } from "lucide-react"

const supportServices = [
  {
    icon: GraduationCap,
    title: "Admissions Guidance",
    description: "Complete application support",
    position: "top-0 left-1/4"
  },
  {
    icon: Globe,
    title: "Visa Support", 
    description: "Step-by-step assistance",
    position: "top-1/4 right-0"
  },
  {
    icon: Users,
    title: "Career Planning",
    description: "Future-focused guidance",
    position: "bottom-1/4 right-0"
  },
  {
    icon: Home,
    title: "Accommodation Help",
    description: "Housing solutions",
    position: "bottom-0 left-1/4"
  },
  {
    icon: BookOpen,
    title: "Local Language & Integration",
    description: "Cultural adaptation support",
    position: "top-1/4 left-0"
  },
  {
    icon: Heart,
    title: "24/7 Personal Support",
    description: "Always here for you",
    position: "bottom-1/4 left-0"
  }
]

export function Support360Section() {
  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">We Cover 360° of Your Study Abroad Journey</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From the moment you decide to study abroad to your successful graduation and beyond, 
            we're with you every step of the way.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Student Image */}
          <div className="relative flex items-center justify-center">
            <div className="w-80 h-80 bg-gradient-to-r from-tiger-eye/20 to-columbia-blue/20 rounded-full flex items-center justify-center">
              <div className="w-64 h-64 bg-card rounded-full flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎓</div>
                  <h3 className="text-xl font-bold text-gunmetal">Your Journey</h3>
                  <p className="text-sm text-muted-foreground">360° Support</p>
                </div>
              </div>
            </div>

            {/* Floating Support Cards */}
            {supportServices.map((service, index) => {
              const Icon = service.icon
              return (
                <Card 
                  key={index} 
                  className={`absolute ${service.position} w-48 card-hover animate-float`}
                  style={{ 
                    animationDelay: `${index * 0.5}s`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <CardContent className="p-4 text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-secondary/20 rounded-xl mx-auto mb-3">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h4 className="font-semibold text-sm mb-1">{service.title}</h4>
                    <p className="text-xs text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Connecting Lines (Visual Enhancement) */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 400 400">
              <defs>
                <radialGradient id="lineGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="hsl(var(--tiger-eye))" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="hsl(var(--columbia-blue))" stopOpacity="0.1" />
                </radialGradient>
              </defs>
              {supportServices.map((_, index) => {
                const angle = (index * 60) - 90
                const x1 = 200
                const y1 = 200
                const x2 = x1 + Math.cos(angle * Math.PI / 180) * 120
                const y2 = y1 + Math.sin(angle * Math.PI / 180) * 120
                
                return (
                  <line
                    key={index}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    className="animate-pulse"
                  />
                )
              })}
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}