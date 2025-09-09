import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "หน้าแรก", href: "#home" },
    { label: "คุณสมบัติ", href: "#features" },
    { label: "ราคา", href: "#pricing" },
    { label: "อุปกรณ์", href: "#equipment" },
    { label: "รีวิว", href: "#reviews" },
    { label: "บทความ", href: "#articles" },
    { label: "ติดต่อ", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-background/95 backdrop-blur-sm border-b border-border shadow-card z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/da3f1f0b-6b70-40b3-a8de-9263272db556.png" 
              alt="Cliniter Plus Logo" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-smooth font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" size="sm" className="text-sm border-2 border-primary bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground font-semibold" asChild>
              <a href="https://lin.ee/rQIBIYa" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                คุยกับทีม LINE
              </a>
            </Button>
            <Button variant="cta" size="sm" className="text-sm" asChild>
              <a href="tel:099-264-4446">
                <Phone className="w-4 h-4 mr-2" />
                ขอนัดเดโม่
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-muted-foreground hover:text-primary transition-smooth font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col space-y-2 px-3 pt-4">
                <Button variant="outline" size="sm" className="w-full border-2 border-primary bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground font-semibold" asChild>
                  <a href="https://lin.ee/rQIBIYa" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    คุยกับทีม LINE
                  </a>
                </Button>
                <Button variant="cta" size="sm" className="w-full" asChild>
                  <a href="tel:099-264-4446">
                    <Phone className="w-4 h-4 mr-2" />
                    ขอนัดเดโม่
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;