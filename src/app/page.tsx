import Image from "next/image";
import Navbar from "@/components/Navbar";
import MainBanner from "@/components/MainBanner"
import Profile from "@/components/Profile";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
   
    <main>
      <Navbar/>

      <MainBanner />
      
      <Profile/>

      <Skills/>

      <Footer/>
    </main>
  );
}
