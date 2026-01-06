import BackgroundMusic from "@/components/BackgroundMusic";
import FloatingElements from "@/components/FloatingElements";
import Watermarks from "@/components/Watermarks";
import HeroSection from "@/components/HeroSection";
import ParentsSection from "@/components/ParentsSection";
import CountdownTimer from "@/components/CountdownTimer";
import EventDetails from "@/components/EventDetails";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen gradient-sky relative overflow-hidden">
      {/* Background Music with entry prompt */}
      <BackgroundMusic />
      
      {/* Floating decorative elements */}
      <FloatingElements />
      
      {/* Watermarks */}
      <Watermarks />
      
      {/* Main content */}
      <main className="relative">
        <HeroSection />
        <ParentsSection />
        <CountdownTimer />
        <EventDetails />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
