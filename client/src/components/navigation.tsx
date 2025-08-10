import { useState } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/leaderboard", label: "LEADERBOARD" },
    { href: "/seasons", label: "SEASONS" },
    { href: "/login", label: "LOGIN" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-beer-brown border-b-4 border-black relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <span className="font-pixel text-beer-gold text-xs sm:text-sm cursor-pointer hover:text-beer-amber transition-colors">
                  🍺 BEER PIXEL
                </span>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span
                    className={cn(
                      "font-pixel text-xs px-3 py-2 border-2 border-transparent transition-all duration-200 cursor-pointer",
                      location === item.href
                        ? "text-beer-gold border-beer-gold"
                        : "text-malt-beige hover:text-beer-gold hover:border-beer-gold"
                    )}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="bg-beer-amber p-2 border-2 border-black text-black font-pixel text-xs hover:bg-beer-gold transition-colors"
              onClick={toggleMobileMenu}
            >
              MENU
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-beer-amber border-t-2 border-black">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  className={cn(
                    "font-pixel text-xs block px-3 py-2 border-2 border-transparent cursor-pointer transition-all duration-200",
                    location === item.href
                      ? "text-black border-black"
                      : "text-black hover:text-beer-brown hover:border-black"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
