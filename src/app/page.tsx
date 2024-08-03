import FAQ from "@/Components/FAQItem";
import FeaturedArticles from "@/Components/FeaturedArticles";
import Hya from "@/Components/HYA";
import Hero from "@/Components/Hero";
import Process from "@/Components/Process";
import TacApp from "@/Components/TacApp";
import Image from "next/image";

export default function Home() {
  return (
   <>
      <Hero/>
      <Hya/>
      <TacApp/>
      <Process/>
      <FAQ/>
      <FeaturedArticles/>
   </>
  );
}
