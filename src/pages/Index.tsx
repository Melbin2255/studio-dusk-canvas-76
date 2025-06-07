
import NavigationBar from '@/components/sections/NavigationBar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ExpertiseSection from '@/components/sections/ExpertiseSection';
import WorksSection from '@/components/sections/WorksSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavigationBar />
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <WorksSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
