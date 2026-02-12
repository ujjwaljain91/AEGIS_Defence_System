import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ScrollytellingSection from "@/components/ScrollytellingSection";
import EngineeringSection from "@/components/EngineeringSection";
import SpotlightCTA from "@/components/SpotlightCTA";
import StrategicTiers from "@/components/StrategicTiers";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <HeroSection />
      <ScrollytellingSection />
      <EngineeringSection />
      <SpotlightCTA />
      <StrategicTiers />
      <Footer />
    </main>
  );
}
