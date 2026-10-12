import AboutSection from './components/homepage/aboutSection';
import FeaturedProperties from './components/homepage/featuredProperties';
import HeroSection from './components/homepage/heroSection';
import WhyChooseUs from './components/homepage/whyChooseUs';
import TestimonialsSection from './components/homepage/testimonialsSection';
import ContactSection from './components/homepage/contactSection';


export default function Home() {
  return (
  
    <main className="flex flex-1 w-full max-w-full flex-col items-center justify-center sm:items-start">
      <HeroSection />
      <AboutSection />
      <FeaturedProperties />
      <WhyChooseUs />
      <TestimonialsSection />
      <ContactSection />
    </main>

  );
}
