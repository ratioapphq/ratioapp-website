import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>Oops...</h1>
      <h2>Page not found.</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>Home Page</a>
        </Link>
      </p>
    </div>
  );
}
