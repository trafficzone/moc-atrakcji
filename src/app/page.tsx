import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Attractions from "@/components/Attractions";
import AtmosphereBand from "@/components/AtmosphereBand";
import HowItWorks from "@/components/HowItWorks";
import AudienceStrip from "@/components/AudienceStrip";
import WhyUs from "@/components/WhyUs";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <StatsBar />
        <Attractions />
        <AtmosphereBand />
        <HowItWorks />
        <AudienceStrip />
        <WhyUs />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
