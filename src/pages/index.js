import About from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import Layout from "@/components/Layout/Layout";
import Projects from "@/components/Projects/Projects";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Projects />
    </>
  );
}
