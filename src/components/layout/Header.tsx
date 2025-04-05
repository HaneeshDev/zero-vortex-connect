
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Menu, X, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from '@/hooks/use-mobile';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ZerovortexLogo from '../ZerovortexLogo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success('Successfully signed out');
      navigate('/');
    } catch (error) {
      toast.error('Error signing out');
    }
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Community", path: "/community" },
    { name: "Events", path: "/events" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <ZerovortexLogo className="h-8 w-8" />
            <span className="text-xl font-bold text-zerovortex-purple">Zerovortex</span>
          </Link>
        </div>

        {!isMobile ? (
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        ) : null}

        <div className="flex items-center gap-2">
          {!isMobile ? (
            <>
              <Link to="/cart">
                <Button variant="ghost" size="icon" aria-label="Shopping cart">
                  <ShoppingCart className="h-5 w-5" />
                </Button>
              </Link>
              
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" aria-label="User account">
                      <User className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>
                      {user.email}
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleSignOut}>
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link to="/login">
                  <Button variant="default" className="bg-zerovortex-purple hover:bg-zerovortex-dark-purple">
                    Sign in
                  </Button>
                </Link>
              )}
            </>
          ) : (
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && (
        <div 
          className={cn(
            "fixed inset-0 top-16 z-50 bg-background pt-4 transition-transform duration-300",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <nav className="container flex flex-col gap-4 p-4">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className="text-lg py-2 border-b border-border"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {user ? (
              <>
                <div className="py-2 border-b border-border">
                  <p className="text-sm text-muted-foreground">Signed in as</p>
                  <p className="font-medium truncate">{user.email}</p>
                </div>
                <Button 
                  className="mt-4"
                  variant="destructive"
                  onClick={() => {
                    handleSignOut();
                    setIsMenuOpen(false);
                  }}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign out
                </Button>
              </>
            ) : (
              <Link 
                to="/login" 
                className="mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="w-full bg-zerovortex-purple hover:bg-zerovortex-dark-purple">Sign in</Button>
              </Link>
            )}
            
            <Link 
              to="/cart" 
              className="mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button variant="outline" className="w-full">
                <ShoppingCart className="mr-2 h-4 w-4" /> View Cart
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
