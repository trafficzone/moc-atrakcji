import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Attractions from "@/components/Attractions";
import HowItWorks from "@/components/HowItWorks";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
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
        <HowItWorks />
        <WhyUs />
        <Gallery />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
