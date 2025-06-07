
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-studio-charcoal border-t border-studio-taupe">
      <div className="container-studio py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-studio-bone/60 text-sm">
              © 2025 Studio Dusk. All rights reserved.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-4">
            {['instagram', 'twitter', 'linkedin'].map((social) => (
              <a
                key={social}
                href="#"
                className="w-10 h-10 bg-studio-taupe rounded-lg flex items-center justify-center hover:bg-studio-gold hover:text-studio-charcoal transition-all duration-300"
              >
                <span className="sr-only">{social}</span>
                <div className="w-5 h-5 bg-current rounded-sm"></div>
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <div className="text-center md:text-right">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-studio-gold hover:text-studio-gold-hover transition-colors duration-300 group"
            >
              <span className="text-sm font-medium">Back to Top</span>
              <ChevronUp 
                size={16} 
                className="transition-transform duration-300 group-hover:-translate-y-1" 
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
