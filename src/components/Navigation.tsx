import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Events", path: "/events" },
    { label: "Dashboard", path: "/dashboard" },
  ];

  const authItems = [
    { label: "Login", path: "/login" },
    { label: "Signup", path: "/signup" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-card/80 backdrop-blur-md border-b shadow-soft sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-xl font-bold text-primary hover:text-primary-light transition-colors"
          >
            <GraduationCap className="h-8 w-8" />
            <span>CampusConnect</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.path)
                      ? "text-primary border-b-2 border-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex space-x-3">
              {authItems.map((item) => (
                <Button
                  key={item.path}
                  asChild
                  variant={item.label === "Signup" ? "default" : "outline"}
                  size="sm"
                >
                  <Link to={item.path}>{item.label}</Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium py-2 px-3 rounded-md transition-colors ${
                    isActive(item.path)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary hover:bg-muted/50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="flex flex-col space-y-2 pt-3 border-t">
                {authItems.map((item) => (
                  <Button
                    key={item.path}
                    asChild
                    variant={item.label === "Signup" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link to={item.path}>{item.label}</Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;