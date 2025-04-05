
import React from 'react';
import { Link } from 'react-router-dom';
import ZerovortexLogo from '../ZerovortexLogo';

const Footer = () => {
  return (
    <footer className="bg-zerovortex-light-gray pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2">
              <ZerovortexLogo className="h-6 w-6" />
              <span className="text-lg font-bold text-zerovortex-purple">Zerovortex</span>
            </div>
            <p className="text-sm text-muted-foreground">
              A hybrid platform combining e-commerce and a student community portal.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/software" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Software Data Bundle</Link>
              </li>
              <li>
                <Link to="/products/hardware" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Hardware Data Bundle</Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">All Products</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/community/forums" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Forums</Link>
              </li>
              <li>
                <Link to="/community/chat" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Live Chat</Link>
              </li>
              <li>
                <Link to="/events" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Events</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6">
          <p className="text-sm text-center text-muted-foreground">
            © {new Date().getFullYear()} Zerovortex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
