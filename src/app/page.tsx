import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import Developers from "@/components/Developers";
import Ecosystem from "@/components/Ecosystem";
import Security from "@/components/Security";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <UseCases />
      <Developers />
      <Ecosystem />
      <Security />
      <Community />
      <Footer />
    </main>
  );
}
