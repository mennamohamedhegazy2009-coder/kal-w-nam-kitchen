import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-warm-brown">
            كل ونام
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 rtl:space-x-reverse">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-warm-brown hover:text-cozy-orange transition-colors"
            >
              الرئيسية
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-warm-brown hover:text-cozy-orange transition-colors"
            >
              القائمة
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-warm-brown hover:text-cozy-orange transition-colors"
            >
              من نحن
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-warm-brown hover:text-cozy-orange transition-colors"
            >
              تواصل معنا
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-gradient-warm hover:opacity-90 text-white border-none">
              احجز الآن
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-warm-brown" />
            ) : (
              <Menu className="w-6 h-6 text-warm-brown" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-warm-brown hover:text-cozy-orange transition-colors text-right"
              >
                الرئيسية
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className="text-warm-brown hover:text-cozy-orange transition-colors text-right"
              >
                القائمة
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-warm-brown hover:text-cozy-orange transition-colors text-right"
              >
                من نحن
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-warm-brown hover:text-cozy-orange transition-colors text-right"
              >
                تواصل معنا
              </button>
              <Button className="bg-gradient-warm hover:opacity-90 text-white border-none">
                احجز الآن
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;