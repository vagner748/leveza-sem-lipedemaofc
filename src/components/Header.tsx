import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { label: "Sobre", id: "sobre" },
    { label: "Ebook", id: "ebook" },
    { label: "Lipedema", id: "lipedema" },
    { label: "Consultas", id: "consultas" },
    { label: "Contato", id: "contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/20 backdrop-blur-md border-b border-border/30 h-20" style={{ backgroundImage: 'url(/logo-wanna/logo-wanna-2.webp)', backgroundSize: 'contain', backgroundPosition: '25% center', backgroundRepeat: 'no-repeat' }}>
      <div className="container mx-auto px-4 py-2 md:py-4">
        <div className="flex items-center justify-between">
          

          {/* Mobile Menu Button */}
          
        </div>

        {/* Mobile Navigation */}
        <nav className={`md:hidden p-4 space-y-2 bg-card rounded-lg shadow-lg transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
              >
                {item.label}
              </button>
            ))}
          </nav>
      </div>
    </header>
  );
};

export default Header;