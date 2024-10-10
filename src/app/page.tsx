import Image from "next/image";
import Navbar from "@/components/Navbar";
import MainBanner from "@/components/MainBanner"
import Profile from "@/components/Profile";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import ActiveSlider from "@/components/ActiveSlider";

export default function Home() {
  return (
   
    <main>
      <Navbar/>

      <Hero/>
      
      <Profile/>

      <Skills/>

      <ProjectsSection/>

      <Footer/>
    </main>
  );
}
