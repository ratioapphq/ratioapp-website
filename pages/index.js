import Head from "next/head";
import Footer from "../components/footer";
import Hero from "../components/Hero";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ratio App - The most insightful personal finance app</title>
      </Head>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
