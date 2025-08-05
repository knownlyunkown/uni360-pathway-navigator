import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Briefcase, MapPin, Clock } from "lucide-react"

export function WorkInGermanySection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <Card className="relative overflow-hidden gradient-hero border-none">
          <CardContent className="p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-white">
                  Work in Germany Made Simple 🇩🇪
                </h2>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Get access to jobs and stay options through the Chancenkarte (Opportunity Card) initiative. 
                  Your pathway to a successful career in Europe's economic powerhouse.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-white/90">
                    <Clock className="w-5 h-5" />
                    <span className="text-sm">1 Year Job Search</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90">
                    <Briefcase className="w-5 h-5" />
                    <span className="text-sm">Full Work Rights</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90">
                    <MapPin className="w-5 h-5" />
                    <span className="text-sm">Path to Residence</span>
                  </div>
                </div>
                
                <Button 
                  size="lg" 
                  className="bg-white text-gunmetal hover:bg-white/90 hover:scale-105 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              
              <div className="relative text-center">
                <div className="text-8xl mb-6">🇩🇪</div>
                <div className="flex items-center justify-center gap-6 text-5xl">
                  <div className="animate-bounce" style={{ animationDelay: '0s' }}>💼</div>
                  <div className="animate-bounce" style={{ animationDelay: '0.2s' }}>🏢</div>
                  <div className="animate-bounce" style={{ animationDelay: '0.4s' }}>🎯</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-tiger-eye/20 to-columbia-blue/20 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}