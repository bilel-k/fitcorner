import { useState } from 'react';
import { Menu, X, Heart, ShoppingCart, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import { useTheme } from '@/contexts/ThemeContext';
import { useCart } from '@/contexts/CartContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { state } = useCart();
  const [location] = useLocation();

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);

  const isActive = (path: string) => {
    if (path === '/' && location === '/') return true;
    if (path !== '/' && location.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-3 md:items-center md:h-20">
          {/* Logo */}
          <div className="flex justify-start">
            <Link href="/" className="flex items-center gap-3 hover:scale-105 hover:opacity-90 transition-all duration-300 ease-out group">
              <img src="/images/fitcornerlogo.png" alt="FitCorner" className="h-12 w-auto transition-transform duration-300 group-hover:rotate-3" />
              <span className="text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">FitCorner</span>
            </Link>
          </div>

          {/* Navigation Desktop */}
          <nav className="flex justify-center gap-8">
            <Link href="/" className={`relative transition-all duration-300 ease-out group py-2 ${isActive('/') ? 'text-primary' : 'text-foreground hover:text-primary'}`}>
              Accueil
              <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link href="/collection" className={`relative transition-all duration-300 ease-out group py-2 ${isActive('/collection') ? 'text-primary' : 'text-foreground hover:text-primary'}`}>
              Collection
              <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive('/collection') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link href="/conseils" className={`relative transition-all duration-300 ease-out group py-2 ${isActive('/conseils') ? 'text-primary' : 'text-foreground hover:text-primary'}`}>
              Conseils
              <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive('/conseils') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link href="/contact" className={`relative transition-all duration-300 ease-out group py-2 ${isActive('/contact') ? 'text-primary' : 'text-foreground hover:text-primary'}`}>
              Contact
              <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive('/contact') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link href="/apropos" className={`relative transition-all duration-300 ease-out group py-2 ${isActive('/apropos') ? 'text-primary' : 'text-foreground hover:text-primary'}`}>
              À propos
              <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive('/apropos') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          </nav>

          {/* Icons Desktop */}
          <div className="flex justify-end items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-secondary hover:scale-110 rounded-lg transition-all duration-300 ease-out active:scale-95"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-foreground transition-transform duration-300 hover:rotate-12" />
              ) : (
                <Sun className="w-5 h-5 text-foreground transition-transform duration-300 hover:rotate-45" />
              )}
            </button>
            <button className="p-2 hover:bg-secondary hover:scale-110 rounded-lg transition-all duration-300 ease-out active:scale-95">
              <Heart className="w-5 h-5 text-foreground transition-transform duration-300 hover:scale-110" />
            </button>
            <Link href="/panier">
              <button className="relative p-2 hover:bg-secondary hover:scale-110 rounded-lg transition-all duration-300 ease-out active:scale-95">
                <ShoppingCart className="w-5 h-5 text-foreground transition-transform duration-300 hover:scale-110" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium animate-pulse">
                    {totalItems}
                  </span>
                )}
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 hover:scale-105 hover:opacity-90 transition-all duration-300 ease-out group">
              <img src="/images/fitcornerlogo.png" alt="FitCorner" className="h-10 w-auto transition-transform duration-300 group-hover:rotate-3" />
              <span className="text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">FitCorner</span>
            </Link>
          </div>

          {/* Mobile Icons */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-secondary hover:scale-110 rounded-lg transition-all duration-300 ease-out active:scale-95"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-foreground transition-transform duration-300 hover:rotate-12" />
              ) : (
                <Sun className="w-5 h-5 text-foreground transition-transform duration-300 hover:rotate-45" />
              )}
            </button>
            <Link href="/panier">
              <button className="relative p-2 hover:bg-secondary hover:scale-110 rounded-lg transition-all duration-300 ease-out active:scale-95">
                <ShoppingCart className="w-5 h-5 text-foreground transition-transform duration-300 hover:scale-110" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium animate-pulse">
                    {totalItems}
                  </span>
                )}
              </button>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-secondary hover:scale-110 rounded-lg transition-all duration-300 ease-out active:scale-95"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-foreground transition-transform duration-300 hover:rotate-90" />
              ) : (
                <Menu className="w-6 h-6 text-foreground transition-transform duration-300 hover:scale-110" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-border animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-4 pt-4">
              <Link href="/" className={`relative transition-all duration-300 ease-out group py-2 ${isActive('/') ? 'text-primary' : 'text-foreground hover:text-primary'}`}>
                Accueil
                <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
              <Link href="/collection" className={`relative transition-all duration-300 ease-out group py-2 ${isActive('/collection') ? 'text-primary' : 'text-foreground hover:text-primary'}`}>
                Collection
                <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive('/collection') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
              <Link href="/conseils" className={`relative transition-all duration-300 ease-out group py-2 ${isActive('/conseils') ? 'text-primary' : 'text-foreground hover:text-primary'}`}>
                Conseils
                <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive('/conseils') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
              <Link href="/contact" className={`relative transition-all duration-300 ease-out group py-2 ${isActive('/contact') ? 'text-primary' : 'text-foreground hover:text-primary'}`}>
                Contact
                <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive('/contact') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
              <Link href="/apropos" className={`relative transition-all duration-300 ease-out group py-2 ${isActive('/apropos') ? 'text-primary' : 'text-foreground hover:text-primary'}`}>
                À propos
                <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive('/apropos') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
