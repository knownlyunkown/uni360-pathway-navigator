import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Menu, GraduationCap, Phone, ChevronDown } from "lucide-react"
import { useCountry } from "@/context/CountryContext"
import { Link, useLocation } from "react-router-dom"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { selectedCountry, setSelectedCountry, showWorkInGermany } = useCountry()
  const location = useLocation()

  const navigation = [
    { name: "Universities", href: "/universities" },
    { name: "Services", href: "/services" },
    ...(showWorkInGermany ? [{ name: "Work in Germany 🇩🇪", href: "/work-in-germany", highlight: true }] : []),
    { name: "About", href: "/about" }
  ]

  const countryOptions = [
    { value: "germany", label: "🇩🇪 Germany", flag: "🇩🇪" },
    { value: "uk", label: "🇬🇧 UK", flag: "🇬🇧" },
    { value: "both", label: "🌍 Both", flag: "🌍" }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 bg-secondary rounded-lg">
              <GraduationCap className="w-5 h-5 text-secondary-foreground" />
            </div>
            <span className="font-bold text-xl">UNI 360°</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {/* Country Selector */}
            <Select value={selectedCountry} onValueChange={(value: any) => setSelectedCountry(value)}>
              <SelectTrigger className="w-auto border-none bg-transparent hover:bg-accent">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {countryOptions.map((country) => (
                  <SelectItem key={country.value} value={country.value}>
                    {country.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                  location.pathname === item.href
                    ? 'text-foreground bg-accent'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                } ${
                  item.highlight 
                    ? 'text-tiger-eye hover:text-tiger-eye animate-pulse font-semibold' 
                    : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">
              <Phone className="w-4 h-4 mr-2" />
              Book a Call
            </Button>
            <Button variant="outline" size="sm">
              Log In
            </Button>
            <Button size="sm" className="btn-tiger-eye">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col gap-6 mt-6">
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-8 h-8 bg-secondary rounded-lg">
                    <GraduationCap className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <span className="font-bold text-xl">UNI 360°</span>
                </div>

                {/* Mobile Country Selector */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Select Country</label>
                  <Select value={selectedCountry} onValueChange={(value: any) => setSelectedCountry(value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {countryOptions.map((country) => (
                        <SelectItem key={country.value} value={country.value}>
                          {country.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <nav className="flex flex-col gap-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`text-sm font-medium transition-colors ${
                        location.pathname === item.href
                          ? 'text-foreground'
                          : 'text-muted-foreground hover:text-foreground'
                      } ${
                        item.highlight 
                          ? 'text-tiger-eye hover:text-tiger-eye animate-pulse font-semibold' 
                          : ''
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <div className="flex flex-col gap-3 pt-4 border-t">
                  <Button variant="ghost" className="justify-start">
                    <Phone className="w-4 h-4 mr-2" />
                    Book a Call
                  </Button>
                  <Button variant="outline">
                    Log In
                  </Button>
                  <Button className="btn-tiger-eye">
                    Sign Up
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}