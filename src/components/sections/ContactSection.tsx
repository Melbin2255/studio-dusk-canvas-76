
import { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ fullName: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-studio-charcoal">
      <div className="container-studio">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl lg:text-6xl font-bold text-studio-bone mb-6">
            Let's Create Together
          </h2>
          <p className="text-lg lg:text-xl text-studio-bone/80 max-w-3xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Reach out, and let's make something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h3 className="text-2xl lg:text-3xl font-bold text-studio-bone mb-8">
              Get in Touch
            </h3>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-studio-taupe rounded-lg flex items-center justify-center">
                  <Mail className="text-studio-gold" size={20} />
                </div>
                <div>
                  <p className="text-studio-bone font-medium">Email</p>
                  <a 
                    href="mailto:hello@studiodusk.com" 
                    className="text-studio-bone/80 hover:text-studio-gold transition-colors duration-300"
                  >
                    hello@studiodusk.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-studio-taupe rounded-lg flex items-center justify-center">
                  <Phone className="text-studio-gold" size={20} />
                </div>
                <div>
                  <p className="text-studio-bone font-medium">Phone</p>
                  <a 
                    href="tel:+12345678900" 
                    className="text-studio-bone/80 hover:text-studio-gold transition-colors duration-300"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-studio-taupe rounded-lg flex items-center justify-center">
                  <MessageCircle className="text-studio-gold" size={20} />
                </div>
                <div>
                  <p className="text-studio-bone font-medium">WhatsApp</p>
                  <span className="text-studio-bone/80">Chat on WhatsApp</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-studio-bone mb-6">
                Connect on Social Media
              </h4>
              <div className="flex gap-4">
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
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="bg-studio-taupe rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-studio-bone mb-8">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-studio-bone font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-studio-charcoal border border-studio-charcoal rounded-lg text-studio-bone focus:border-studio-gold focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-studio-bone font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-studio-charcoal border border-studio-charcoal rounded-lg text-studio-bone focus:border-studio-gold focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-studio-bone font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-studio-charcoal border border-studio-charcoal rounded-lg text-studio-bone focus:border-studio-gold focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-studio-bone font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-studio-charcoal border border-studio-charcoal rounded-lg text-studio-bone focus:border-studio-gold focus:outline-none transition-colors duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-studio-primary justify-center"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
