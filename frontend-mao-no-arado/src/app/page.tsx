import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import OurProjects from "@/components/home/OurProjects";
import HowHelp from "@/components/home/HowHelp";
import Testimonials from "@/components/home/Testimonials";
import LastestNews from "@/components/home/LastestNews";
import {OurTeam} from "@/components/home/OurTeam";
import Media from "@/components/home/Media";
import Partner from "@/components/home/Partner";
import CookieConsent from "@/components/layout/CookieConsent";
import FrequentlyAskedQuestions from "@/components/home/FrequentlyAskedQuestions";
import NextEvents from "@/components/home/NextEvents";
import OurPresident from "@/components/home/OurPresident";

export default function Home() {
    return (
        <>
            <Navbar/>
            <Hero/>
            <About/>
            <Media/>
            <OurProjects/>
            <Testimonials/>
            <LastestNews/>
            <NextEvents/>
            <OurTeam/>
            <OurPresident/>
            <Partner/>
            <HowHelp/>
            <FrequentlyAskedQuestions/>
            <Footer/>
            <CookieConsent/>
        </>
    );
}
