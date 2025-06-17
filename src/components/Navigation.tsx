
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-neon-purple to-neon-purple-light rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <span className="text-2xl font-bold gradient-text">NeuroForge</span>
            <span className="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded">v3.0</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/#funcionalidades" className="text-gray-300 hover:text-white transition-colors">
              Funcionalidades
            </a>
            <a href="/#como-funciona" className="text-gray-300 hover:text-white transition-colors">
              Como Funciona
            </a>
            <a href="/#planos" className="text-gray-300 hover:text-white transition-colors">
              Planos
            </a>
            <Link to="/docs" className="text-gray-300 hover:text-white transition-colors">
              Docs
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
              Blog
            </Link>
          </div>
          
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-gray-300 hover:text-white">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-neon-purple hover:bg-neon-purple-light text-white rounded-lg">
                Começar Grátis
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="md:hidden text-white"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 border-t border-gray-800 pt-4">
            <a href="/#funcionalidades" className="block text-gray-300 hover:text-white transition-colors">
              Funcionalidades
            </a>
            <a href="/#como-funciona" className="block text-gray-300 hover:text-white transition-colors">
              Como Funciona
            </a>
            <a href="/#planos" className="block text-gray-300 hover:text-white transition-colors">
              Planos
            </a>
            <Link to="/docs" className="block text-gray-300 hover:text-white transition-colors">
              Docs
            </Link>
            <Link to="/blog" className="block text-gray-300 hover:text-white transition-colors">
              Blog
            </Link>
            <div className="flex flex-col space-y-2 pt-4">
              <Link to="/login">
                <Button variant="ghost" className="text-gray-300 hover:text-white justify-start w-full">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button className="bg-neon-purple hover:bg-neon-purple-light text-white rounded-lg justify-start w-full">
                  Começar Grátis
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
