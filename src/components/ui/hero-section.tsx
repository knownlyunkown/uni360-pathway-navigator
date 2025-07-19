import { Button } from "@/components/ui/button"
import { ArrowRight, GraduationCap } from "lucide-react"
import heroImage from "@/assets/hero-students.jpg"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-full text-secondary-foreground">
              <GraduationCap className="w-4 h-4" />
              <span className="text-sm font-medium">Trusted by 500+ students</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Study in Germany—
              <span className="text-secondary block">with expert-backed support</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              From documents to degree—UNI 360° simplifies your path. 
              Get personalized guidance, APS support, and visa assistance all in one place.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-tiger-eye group">
                Explore Universities
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary hover:bg-primary hover:text-primary-foreground">
                Book a Call
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Students Placed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Visa Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Partner Universities</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={heroImage} 
                alt="Students studying in Germany" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Live Support Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}