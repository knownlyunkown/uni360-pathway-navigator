import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Computer Science Student",
    university: "TU Munich",
    content: "UNI 360° made my dream of studying in Germany a reality. The APS guidance was invaluable, and their AI SOP tool helped me craft the perfect application. Now I'm pursuing my Master's at TUM!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616c356b02e?w=100&h=100&fit=crop&crop=face",
    country: "🇩🇪"
  },
  {
    name: "Rahul Patel",
    role: "Mechanical Engineering Student",
    university: "RWTH Aachen",
    content: "The visa process seemed overwhelming until I found UNI 360°. Their step-by-step guidance and blocked account assistance made everything smooth. Highly recommend their services!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    country: "🇩🇪"
  },
  {
    name: "Ananya Singh",
    role: "Business Student",
    university: "University of Frankfurt",
    content: "From document preparation to university selection, UNI 360° supported me throughout. Their 24/7 support team answered all my queries promptly. I'm now studying Business at Frankfurt University!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    country: "🇩🇪"
  },
  {
    name: "Sarah Johnson",
    role: "MBA Student",
    university: "London Business School",
    content: "The UK application process was simplified with UNI 360°. From UCAS to CAS, they guided me every step. Their mock interview sessions prepared me perfectly for my LBS interview!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
    country: "🇬🇧"
  },
  {
    name: "David Chen",
    role: "Data Science Student",
    university: "Imperial College London",
    content: "Amazing support throughout my application to Imperial! The personal statement workshop and visa assistance were exceptional. Can't thank UNI 360° enough for making my dream possible.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    country: "🇬🇧"
  },
  {
    name: "Emma Wilson",
    role: "Medicine Student",
    university: "University of Edinburgh",
    content: "The medical school application process was intense, but UNI 360° made it manageable. Their expertise in UK medical admissions was evident throughout. Now I'm studying at Edinburgh!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
    country: "🇬🇧"
  }
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  // Auto-rotate testimonials
  useEffect(() => {
    if (!autoPlay) return
    
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length)
    setAutoPlay(false)
  }

  const prevTestimonial = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
    setAutoPlay(false)
  }

  const activeTestimonial = testimonials[activeIndex]

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real journeys from students who achieved their dreams with our guidance
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Main featured testimonial */}
          <div className="lg:col-span-2">
            <Card className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-chart-2/5 border-2 border-primary/20 shadow-2xl">
              <CardContent className="p-8 lg:p-12">
                <div className="absolute top-6 right-6 text-4xl opacity-20">
                  {activeTestimonial.country}
                </div>
                
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(activeTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-lg leading-relaxed mb-8 text-foreground">
                  "{activeTestimonial.content}"
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <Avatar className="w-16 h-16 border-4 border-primary/20">
                    <AvatarImage src={activeTestimonial.image} alt={activeTestimonial.name} />
                    <AvatarFallback className="text-lg font-bold">
                      {activeTestimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-xl font-bold text-foreground">{activeTestimonial.name}</div>
                    <div className="text-muted-foreground">{activeTestimonial.role}</div>
                    <div className="text-primary font-semibold">{activeTestimonial.university}</div>
                  </div>
                </div>

                {/* Navigation controls */}
                <div className="flex items-center justify-between mt-8">
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setActiveIndex(index)
                          setAutoPlay(false)
                        }}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === activeIndex 
                            ? 'bg-primary scale-125' 
                            : 'bg-primary/30 hover:bg-primary/50'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={prevTestimonial}
                      className="w-10 h-10 rounded-full"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={nextTestimonial}
                      className="w-10 h-10 rounded-full"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar with scrollable testimonials */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4 text-center lg:text-left">More Success Stories</h3>
            <div className="space-y-3 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-md ${
                    index === activeIndex 
                      ? 'ring-2 ring-primary shadow-lg scale-105' 
                      : 'hover:scale-102'
                  }`}
                  onClick={() => {
                    setActiveIndex(index)
                    setAutoPlay(false)
                  }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback className="text-sm">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-sm truncate">{testimonial.name}</h4>
                          <span className="text-lg">{testimonial.country}</span>
                        </div>
                        <p className="text-xs text-muted-foreground truncate">{testimonial.university}</p>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-card border rounded-xl p-6 shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">4.9/5</div>
              <div className="text-sm text-muted-foreground">Student Rating</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-chart-2 to-chart-3 bg-clip-text text-transparent">1000+</div>
              <div className="text-sm text-muted-foreground">Success Stories</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-chart-3 to-chart-4 bg-clip-text text-transparent">98%</div>
              <div className="text-sm text-muted-foreground">Recommend Us</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}