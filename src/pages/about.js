import Link from "next/link";

export default function About() {
  return (
    <div>
      <p className="title">
        <Link href="/">
          <span className="text-gray-500 underline">Back Home</span>
        </Link>
      </p>
      <h1>About Us.</h1>
    </div>
  );
}
