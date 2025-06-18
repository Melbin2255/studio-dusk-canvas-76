import { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MessageCircle, Send, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import GradientBlobs from '../effects/GradientBlobs';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form subddmission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ fullName: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "sojannnnnhere@gmail.com",
      href: "mailto:sojannnnnhere@gmail.com",
      description: "Drop me a line anytime"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8075181054",
      href: "tel:+918075181054",
      description: "Let's have a quick chat"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat on WhatsApp",
      href: "https://wa.me/918075181054?text=Hi%20there!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
      description: "Quick responses guaranteed"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kerala, India",
      href: "#",
      description: "Available for local meetings"
    }
  ];

  return (
    <section ref={sectionRef} id="contact" className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-[#f8f5ff] via-[#f3e6ff] to-[#ede0ff]">
      <GradientBlobs intensity="medium" className="opacity-80" />
      
      <div className="container-studio relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-studio-gold/10 text-studio-gold px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Clock size={16} />
            Available for new projects
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-studio-bone mb-4 sm:mb-6">
            Let's Create Together
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-studio-bone/80 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Reach out, and let's make something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="sticky top-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-studio-bone mb-8 lg:mb-12">
                Get in Touch
              </h3>

              {/* Contact Methods Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6 mb-8 lg:mb-12">
                {contactMethods.map((method, index) => (
                  <div
                    key={method.label}
                    className={`group bg-studio-taupe/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-studio-taupe hover:border-studio-gold/50 transition-all duration-300 hover:bg-studio-taupe/70 hover:scale-105 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-studio-gold/20 rounded-xl flex items-center justify-center group-hover:bg-studio-gold/30 transition-colors duration-300 flex-shrink-0">
                        <method.icon className="text-studio-gold" size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-studio-bone font-semibold text-sm sm:text-base mb-1">{method.label}</p>
                        <a 
                          href={method.href} 
                          className="text-studio-bone/80 hover:text-studio-gold transition-colors duration-300 text-sm sm:text-base block truncate group-hover:text-studio-gold"
                        >
                          {method.value}
                        </a>
                        <p className="text-studio-bone/60 text-xs sm:text-sm mt-1">{method.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <h4 className="text-lg sm:text-xl font-semibold text-studio-bone mb-4 sm:mb-6">
                  Connect on Social Media
                </h4>
                <div className="flex gap-3 sm:gap-4">
                  {['instagram', 'twitter', 'linkedin', 'github'].map((social, index) => (
                    <a
                      key={social}
                      href="#"
                      className="w-12 h-12 bg-studio-taupe/50 rounded-xl flex items-center justify-center hover:bg-studio-gold hover:text-studio-charcoal transition-all duration-300 hover:scale-110 group"
                    >
                      <span className="sr-only">{social}</span>
                      <div className="w-5 h-5 bg-current rounded-sm group-hover:animate-pulse"></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-3 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="bg-gradient-to-br from-studio-taupe/60 to-studio-taupe/40 backdrop-blur-lg rounded-3xl p-6 sm:p-8 lg:p-10 border border-studio-taupe/50 shadow-2xl">
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="w-8 h-8 bg-studio-gold/20 rounded-lg flex items-center justify-center">
                  <Send className="text-studio-gold" size={16} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-studio-bone">
                  Send a Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="block text-studio-bone font-medium text-sm sm:text-base">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 sm:py-4 bg-studio-charcoal/60 border border-studio-charcoal/60 rounded-xl text-studio-bone placeholder:text-studio-bone/50 focus:border-studio-gold focus:outline-none focus:ring-2 focus:ring-studio-gold/20 transition-all duration-300 text-sm sm:text-base"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-studio-bone font-medium text-sm sm:text-base">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 sm:py-4 bg-studio-charcoal/60 border border-studio-charcoal/60 rounded-xl text-studio-bone placeholder:text-studio-bone/50 focus:border-studio-gold focus:outline-none focus:ring-2 focus:ring-studio-gold/20 transition-all duration-300 text-sm sm:text-base"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-studio-bone font-medium text-sm sm:text-base">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 sm:py-4 bg-studio-charcoal/60 border border-studio-charcoal/60 rounded-xl text-studio-bone placeholder:text-studio-bone/50 focus:border-studio-gold focus:outline-none focus:ring-2 focus:ring-studio-gold/20 transition-all duration-300 text-sm sm:text-base"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-studio-bone font-medium text-sm sm:text-base">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 sm:py-4 bg-studio-charcoal/60 border border-studio-charcoal/60 rounded-xl text-studio-bone placeholder:text-studio-bone/50 focus:border-studio-gold focus:outline-none focus:ring-2 focus:ring-studio-gold/20 transition-all duration-300 resize-none text-sm sm:text-base"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-studio-primary justify-center py-4 sm:py-5 text-base sm:text-lg font-semibold rounded-xl hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300 group"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-studio-charcoal border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      Send Message
                      <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  )}
                </button>
              </form>

              {/* Additional Info */}
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-studio-bone/10">
                <p className="text-studio-bone/60 text-xs sm:text-sm text-center">
                  I typically respond within 24 hours. For urgent matters, feel free to call or message on WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
