import Hero from "@/components/Hero";
import CustomRequest from "@/components/CustomRequest";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function TechBridgePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <CustomRequest />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}