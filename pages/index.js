import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p className="title">
        <Link href="/about">
          <a className="text-gray-500 underline">About Us.</a>
        </Link>
      </p>
      <h1 className="text-3xl font-bold">Welcome to Ratio App.</h1>
      <p clas>The most insightful personal finance app.</p>
    </div>
  );
}
