import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import dynamic from "next/dynamic";

const Services = dynamic(() => import("@/components/Services"));
const Crew = dynamic(() => import("@/components/Crew"));
const Voices = dynamic(() => import("@/components/Voices"));
const VisitUs = dynamic(() => import("@/components/VisitUs"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Crew />
      <Voices />
      <VisitUs />
      <Footer />
    </main>
  );
}
