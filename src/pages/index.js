import Head from "next/head";
import Hero from "@/components/Hero";
import FAQs from "@/components/FAQs";
import Features from "@/components/Features";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ratio App - The most insightful personal finance app</title>
      </Head>
      <Hero />
      <Features />
      <FAQs />
      {/* Another newsletter component here for them to sign up for updates. */}
    </div>
  );
}
