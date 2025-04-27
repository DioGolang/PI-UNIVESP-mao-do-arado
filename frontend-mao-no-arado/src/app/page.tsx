import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import OurProjects from "@/components/home/OurProjects";
import HowHelp from "@/components/home/HowHelp";
import Testimonials from "@/components/home/Testimonials";
import LastestNews from "@/components/home/LastestNews";

export default function Home() {
  return (
      <>
          <Navbar/>
          <Hero />
          <About />
          <OurProjects />
          <HowHelp />
          <Testimonials />
          <LastestNews />
          <Footer />
      </>
  );
}
