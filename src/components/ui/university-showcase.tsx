import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { MapPin, Clock, Star, Users, ArrowRight } from "lucide-react"

const universities = [
  {
    id: 1,
    name: "Technical University of Munich",
    location: "Munich, Germany",
    ranking: "#1 in Germany",
    programs: ["Computer Science", "Engineering", "Business"],
    duration: "3-4 years",
    intake: "Sept & Feb",
    tuition: "€350/semester",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=250&fit=crop"
  },
  {
    id: 2,
    name: "University of Heidelberg",
    location: "Heidelberg, Germany",
    ranking: "#2 in Germany",
    programs: ["Medicine", "Law", "Natural Sciences"],
    duration: "3-6 years",
    intake: "Sept",
    tuition: "€171.75/semester",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=250&fit=crop"
  },
  {
    id: 3,
    name: "Humboldt University",
    location: "Berlin, Germany",
    ranking: "#3 in Germany",
    programs: ["Social Sciences", "Humanities", "Economics"],
    duration: "3-4 years",
    intake: "Sept & March",
    tuition: "€315/semester",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=250&fit=crop"
  },
  {
    id: 4,
    name: "RWTH Aachen University",
    location: "Aachen, Germany",
    ranking: "#4 in Engineering",
    programs: ["Mechanical Eng", "Electrical Eng", "Computer Science"],
    duration: "3-4 years",
    intake: "Sept",
    tuition: "€331.80/semester",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400&h=250&fit=crop"
  },
  {
    id: 5,
    name: "University of Frankfurt",
    location: "Frankfurt, Germany",
    ranking: "#5 in Business",
    programs: ["Finance", "Economics", "Management"],
    duration: "2-4 years",
    intake: "Sept & Feb",
    tuition: "€350/semester",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop"
  },
  {
    id: 6,
    name: "Max Planck Institute",
    location: "Multiple Locations",
    ranking: "#1 in Research",
    programs: ["Physics", "Chemistry", "Biology"],
    duration: "3-5 years",
    intake: "Sept",
    tuition: "€0 (Funded)",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=250&fit=crop"
  }
]

export function UniversityShowcase() {
  const [selectedUni, setSelectedUni] = useState<typeof universities[0] | null>(null)

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Partner Universities</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our network of top German universities and find the perfect program for your academic goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {universities.map((uni) => (
            <Dialog key={uni.id}>
              <DialogTrigger asChild>
                <Card className="card-hover cursor-pointer group">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={uni.image} 
                      alt={uni.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 right-3 bg-secondary">
                      {uni.ranking}
                    </Badge>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-lg">{uni.name}</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {uni.location}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span>{uni.duration}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {uni.programs.slice(0, 2).map((program) => (
                          <Badge key={program} variant="outline" className="text-xs">
                            {program}
                          </Badge>
                        ))}
                        {uni.programs.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{uni.programs.length - 2}
                          </Badge>
                        )}
                      </div>
                      
                      <div className="text-sm font-medium text-tiger-eye">
                        {uni.tuition}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>

              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>{uni.name}</DialogTitle>
                  <DialogDescription>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {uni.location}
                    </div>
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-4">
                  <img 
                    src={uni.image} 
                    alt={uni.name}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium">Ranking</div>
                      <div className="text-muted-foreground">{uni.ranking}</div>
                    </div>
                    <div>
                      <div className="font-medium">Duration</div>
                      <div className="text-muted-foreground">{uni.duration}</div>
                    </div>
                    <div>
                      <div className="font-medium">Intake</div>
                      <div className="text-muted-foreground">{uni.intake}</div>
                    </div>
                    <div>
                      <div className="font-medium">Tuition</div>
                      <div className="text-tiger-eye font-medium">{uni.tuition}</div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="font-medium mb-2">Programs</div>
                    <div className="flex flex-wrap gap-1">
                      {uni.programs.map((program) => (
                        <Badge key={program} variant="outline">
                          {program}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full btn-tiger-eye">
                    Log in to Apply
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
}