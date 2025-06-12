
import { ChevronUp, Instagram, Twitter, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-border-light relative">
      {/* Purple gradient accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-purple-gradient"></div>
      
      <div className="container-modern py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-montserrat font-bold text-gradient-purple mb-4">
              Sojan Augustine
            </h3>
            <p className="text-text-secondary text-lg leading-relaxed mb-6 max-w-md font-lato">
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
                  className="w-12 h-12 bg-purple-gradient-soft rounded-xl flex items-center justify-center hover:bg-purple-gradient hover:text-white transition-all duration-300 group shadow-soft hover:shadow-purple border border-border-light"
                  aria-label={label}
                >
                  <Icon size={20} className="transition-transform duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-montserrat font-semibold text-black mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About', 'Expertise', 'Works', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-text-secondary hover:text-purple-gradient-start transition-colors duration-300 hover:translate-x-2 transform font-lato"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-montserrat font-semibold text-black mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-text-secondary">
                <Mail size={18} className="text-purple-gradient-start" />
                <a href="mailto:sojannnnnhere@gmail.com" className="hover:text-purple-gradient-start transition-colors duration-300 font-lato">
                  sojannnnnhere@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-text-secondary">
                <Phone size={18} className="text-purple-gradient-start" />
                <a href="tel:+918075181054" className="hover:text-purple-gradient-start transition-colors duration-300 font-lato">
                  +91 8075181054
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border-light pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-muted text-sm font-lato">
              © 2025 Sojan Augustine. All rights reserved.
            </p>
            
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-purple-gradient-start hover:text-purple-gradient-end transition-all duration-300 group bg-purple-gradient-soft hover:bg-purple-gradient/10 px-4 py-2 rounded-full border border-purple-gradient-start/20 shadow-soft hover:shadow-purple"
            >
              <span className="text-sm font-medium font-lato">Back to Top</span>
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
