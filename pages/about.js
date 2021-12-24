import Link from "next/link";

export default function About() {
  return (
    <div>
      <p className="title">
        <Link href="/">
          <a className="text-gray-500 underline">Back Home</a>
        </Link>
      </p>
      <h1>About Us.</h1>
    </div>
  );
}
