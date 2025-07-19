import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, GraduationCap, Phone } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Universities", href: "#universities" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Why Us", href: "#why-us" },
    { name: "Success Stories", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 bg-secondary rounded-lg">
              <GraduationCap className="w-5 h-5 text-secondary-foreground" />
            </div>
            <span className="font-bold text-xl">UNI 360°</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </a>
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

                <nav className="flex flex-col gap-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
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