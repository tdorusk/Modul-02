import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialSection from "@/components/TestimonialSection";
import FooterSection from "@/components/FooterSection";
import ContactSection from "@/components/ContactSection";
import BlogSection from "@/components/BlogSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-300">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <ContactSection />
    <BlogSection />
    <TestimonialSection />
    <FooterSection />
    </div>
  );
}
