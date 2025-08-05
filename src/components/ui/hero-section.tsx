import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, GraduationCap, ChevronLeft, ChevronRight } from "lucide-react"
import heroImage from "@/assets/hero-students.jpg"

const carouselImages = [
  {
    src: heroImage,
    alt: "Students studying in Germany",
    caption: "Students at German Universities"
  },
  {
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
    alt: "UK University Campus",
    caption: "UK University Campus"
  },
  {
    src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop",
    alt: "International Student Life",
    caption: "Student Life Abroad"
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    alt: "Students collaborating",
    caption: "Global Education Community"
  }
]

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }
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
              Start Your Global Education Journey
              <span className="text-secondary block">with UNI 360°</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Explore top universities, secure admissions, and build your future abroad with comprehensive guidance every step of the way.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-tiger-eye group hover:scale-105 transition-all duration-300">
                Book One-on-One Call
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300">
                Get Personalised Recommendations
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
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
              <div className="relative h-96 w-full">
                {carouselImages.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                
                {/* Carousel Controls */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                
                {/* Carousel Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
                
                {/* Caption */}
                <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-lg text-sm">
                  {carouselImages[currentImageIndex].caption}
                </div>
              </div>
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