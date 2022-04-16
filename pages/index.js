import Head from "next/head";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ratio App - The most insightful personal finance app</title>
      </Head>
      <Hero />
      <Features />
    </div>
  );
}
