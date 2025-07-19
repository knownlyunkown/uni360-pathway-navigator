import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Computer Science Student",
    university: "TU Munich",
    content: "UNI 360° made my dream of studying in Germany a reality. The APS guidance was invaluable, and their AI SOP tool helped me craft the perfect application. Now I'm pursuing my Master's at TUM!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616c356b02e?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Rahul Patel",
    role: "Mechanical Engineering Student",
    university: "RWTH Aachen",
    content: "The visa process seemed overwhelming until I found UNI 360°. Their step-by-step guidance and blocked account assistance made everything smooth. Highly recommend their services!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Ananya Singh",
    role: "Business Student",
    university: "University of Frankfurt",
    content: "From document preparation to university selection, UNI 360° supported me throughout. Their 24/7 support team answered all my queries promptly. I'm now studying Business at Frankfurt University!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  }
]

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from students who successfully made their way to German universities with our support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-secondary font-medium">{testimonial.university}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional testimonial stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-card border rounded-xl p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4.9/5</div>
              <div className="text-sm text-muted-foreground">Student Rating</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Success Stories</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">95%</div>
              <div className="text-sm text-muted-foreground">Recommend Us</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}