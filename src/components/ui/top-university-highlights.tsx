import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, ArrowRight, Star } from "lucide-react"
import { useCountry } from "@/context/CountryContext"

const germanUniversities = [
  {
    name: "Technical University of Munich",
    description: "Top-ranked in Computer Science and AI with 90% placement rate. Excellence in engineering and technology programs.",
    location: "Munich, Germany",
    tags: ["Engineering", "AI", "TopRanked"],
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=250&fit=crop"
  },
  {
    name: "University of Heidelberg", 
    description: "Prestigious research university with outstanding programs in medicine and natural sciences.",
    location: "Heidelberg, Germany",
    tags: ["Medicine", "Research", "Historic"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=250&fit=crop"
  },
  {
    name: "RWTH Aachen University",
    description: "Leading technical university with strong industry connections and excellent engineering programs.",
    location: "Aachen, Germany", 
    tags: ["Engineering", "Technology", "Industry"],
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400&h=250&fit=crop"
  }
]

const ukUniversities = [
  {
    name: "University of Oxford",
    description: "World's oldest English-speaking university with unparalleled academic excellence and global reputation.",
    location: "Oxford, UK",
    tags: ["Research", "Historic", "Prestigious"],
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=250&fit=crop"
  },
  {
    name: "Imperial College London",
    description: "Top-ranked in science, engineering, medicine and business with exceptional research opportunities.",
    location: "London, UK",
    tags: ["Science", "Engineering", "Innovation"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop"
  },
  {
    name: "University of Cambridge",
    description: "Leading global university with cutting-edge research and world-class academic programs.",
    location: "Cambridge, UK",
    tags: ["Research", "Excellence", "Innovation"],
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=250&fit=crop"
  }
]

export function TopUniversityHighlights() {
  const { selectedCountry } = useCountry()

  const getUniversities = () => {
    switch (selectedCountry) {
      case 'germany':
        return germanUniversities
      case 'uk':
        return ukUniversities
      case 'both':
        return [...germanUniversities, ...ukUniversities]
      default:
        return [...germanUniversities, ...ukUniversities]
    }
  }

  const getSectionTitle = () => {
    switch (selectedCountry) {
      case 'germany':
        return "Explore Top Universities in Germany 🇩🇪"
      case 'uk':
        return "Explore Top Universities in the UK 🇬🇧"
      case 'both':
        return "Explore Top Picks from Germany 🇩🇪 and the UK 🇬🇧"
      default:
        return "Explore Top Picks from Germany 🇩🇪 and the UK 🇬🇧"
    }
  }

  const universities = getUniversities()

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{getSectionTitle()}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover world-class institutions that will shape your future and open doors to global opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {universities.slice(0, 6).map((uni, index) => (
            <Card key={index} className="card-hover group cursor-pointer overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={uni.image} 
                  alt={uni.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-3 right-3">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg group-hover:text-tiger-eye transition-colors">
                  {uni.name}
                </CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {uni.location}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {uni.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {uni.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      #{tag}
                    </Badge>
                  ))}
                </div>
                
                <Button className="w-full btn-tiger-eye group/btn">
                  Explore More Universities
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="btn-columbia-blue">
            View All Universities
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}