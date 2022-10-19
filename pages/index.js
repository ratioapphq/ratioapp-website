import Head from "next/head";
import FAQs from "../components/FAQs";
import Features from "../components/Features";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ratio App - The most insightful personal finance app</title>
      </Head>
      <Hero />
      <Features />
      <FAQs />
    </div>
  );
}
