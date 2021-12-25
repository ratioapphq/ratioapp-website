import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Hero from "../components/Hero";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

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
