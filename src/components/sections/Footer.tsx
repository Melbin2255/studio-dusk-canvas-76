
import { ChevronUp, Instagram, Twitter, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-t from-studio-charcoal via-studio-charcoal to-studio-taupe/20 border-t border-studio-gold/10">
      <div className="container-studio py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-studio-gold mb-4">
              Sojan Augustine
            </h3>
            <p className="text-studio-bone/70 text-lg leading-relaxed mb-6 max-w-md">
              Visual artist and post-production specialist crafting immersive experiences through 3D animation, VFX, and color grading.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-12 h-12 bg-studio-taupe rounded-xl flex items-center justify-center hover:bg-studio-gold hover:text-studio-charcoal transition-all duration-300 group"
                  aria-label={label}
                >
                  <Icon size={20} className="transition-transform duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-studio-bone mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About', 'Expertise', 'Works', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-studio-bone/70 hover:text-studio-gold transition-colors duration-300 hover:translate-x-2 transform"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold text-studio-bone mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-studio-bone/70">
                <Mail size={18} className="text-studio-gold" />
                <span>hello@sojanaugustine.com</span>
              </div>
              <div className="flex items-center gap-3 text-studio-bone/70">
                <Phone size={18} className="text-studio-gold" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-studio-taupe pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-studio-bone/60 text-sm">
              © 2025 Sojan Augustine. All rights reserved.
            </p>
            
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-studio-gold hover:text-studio-gold-hover transition-all duration-300 group bg-studio-taupe hover:bg-studio-gold/20 px-4 py-2 rounded-full"
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
