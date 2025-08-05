import { useState } from "react"
import { Header } from "@/components/ui/header"
import { Footer } from "@/components/ui/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Search, Filter } from "lucide-react"
import { useCountry } from "@/context/CountryContext"

const allUniversities = [
  {
    id: 1,
    name: "Technical University of Munich",
    location: "Munich, Germany",
    country: "germany",
    ranking: "#1 in Germany",
    highlight: "Ranked #1 in Data Science",
    tags: ["Engineering", "AI", "TopRanked"],
    logo: "🏛️"
  },
  {
    id: 2,
    name: "University of Oxford",
    location: "Oxford, UK",
    country: "uk", 
    ranking: "#2 Globally",
    highlight: "World's oldest English-speaking university",
    tags: ["Research", "Medicine", "Law"],
    logo: "🎓"
  },
  {
    id: 3,
    name: "Imperial College London",
    location: "London, UK",
    country: "uk",
    ranking: "#3 in Engineering", 
    highlight: "Top-ranked in Computer Science and AI",
    tags: ["Engineering", "Technology", "Innovation"],
    logo: "🏛️"
  },
  {
    id: 4,
    name: "University of Heidelberg",
    location: "Heidelberg, Germany",
    country: "germany",
    ranking: "#2 in Germany",
    highlight: "Excellence in Medicine and Natural Sciences",
    tags: ["Medicine", "Research", "Historic"],
    logo: "🎓"
  }
]

export default function Universities() {
  const { selectedCountry } = useCountry()
  const [searchTerm, setSearchTerm] = useState("")
  const [courseFilter, setCourseFilter] = useState("")
  const [countryFilter, setCountryFilter] = useState("")

  const filteredUniversities = allUniversities.filter(uni => {
    const matchesSearch = uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         uni.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         uni.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCountry = !countryFilter || uni.country === countryFilter ||
                          (selectedCountry === 'both' && (uni.country === 'germany' || uni.country === 'uk'))
    
    return matchesSearch && matchesCountry
  })

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="gradient-hero py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Top Universities Await You</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover world-class institutions and find your perfect academic match
            </p>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="sticky top-16 z-40 bg-background/95 backdrop-blur-md border-b py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search universities by name, course, or location"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex gap-2">
                <Select value={countryFilter} onValueChange={setCountryFilter}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All</SelectItem>
                    <SelectItem value="germany">🇩🇪 Germany</SelectItem>
                    <SelectItem value="uk">🇬🇧 UK</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={courseFilter} onValueChange={setCourseFilter}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All</SelectItem>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="medicine">Medicine</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Universities Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredUniversities.map((uni) => (
                <Card key={uni.id} className="card-hover group cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="text-3xl mb-2">{uni.logo}</div>
                      <Badge variant="secondary">{uni.ranking}</Badge>
                    </div>
                    <CardTitle className="text-lg">{uni.name}</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {uni.location}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground">{uni.highlight}</p>
                      
                      <div className="flex flex-wrap gap-1">
                        {uni.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <Button className="w-full btn-tiger-eye group-hover:scale-105 transition-transform">
                        Explore
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}