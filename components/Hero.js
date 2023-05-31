import { CheckCircleIcon, XIcon } from "@heroicons/react/solid";
import { DeviceMobileIcon } from "@heroicons/react/outline";
import Image from "next/image";
import heroImage from "../public/hero-image.png";
import { useState } from "react";
import Alert from "./Alert";
import Link from "next/link";

import * as ga from "../lib/ga";

export default function Hero() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState({ message: "" });

  return (
    <div className="relative bg-white overflow-hidden">
      <div
        className="hidden lg:block lg:absolute lg:inset-0"
        aria-hidden="true"
      >
        <svg
          className="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8"
          width={640}
          height={784}
          fill="none"
          viewBox="0 0 640 784"
        >
          <defs>
            <pattern
              id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
              x={118}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            y={72}
            width={640}
            height={640}
            className="text-gray-50"
            fill="currentColor"
          />
          <rect
            x={118}
            width={404}
            height={784}
            fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
          />
        </svg>
      </div>

      <div className="relative pt-6 sm:pb-24 lg:pb-8">
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Left Section: Copy */}
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1>
                <span className="flex text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                  Now in private BETA
                  <DeviceMobileIcon
                    className="flex-shrink-0 h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                  <span className="block text-gray-900">
                    Designed to help you
                  </span>
                  <span className="block text-gray-900">
                    become financially responsible.
                  </span>
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Ratio App is an easy and secure way to track your finances and build healthy financial habits. Unlock the most valuable insights from your financial data so that you can make better financial decisions.
              </p>
              {/* Sign Up Form */}
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <p className="text-base font-medium text-gray-900">
                  Join our waitlist to receive early access.
                </p>
                <form onSubmit={handleSubmit} className="mt-3 sm:flex">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full py-3 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-ratiogreen-500 focus:border-ratiogreen-500 sm:flex-1 border-gray-300"
                    placeholder="Enter your email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-ratiogreen-400 shadow-sm hover:bg-ratiogreen-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ratiogreen-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto disabled:opacity-70"
                  >
                    Get early access
                  </button>
                </form>
                <p className="mt-3 text-sm text-gray-500">
                  We care about the protection of your data. Read our&nbsp;
                  <Link href="/privacy" passHref>
                    <span className="font-medium text-gray-900 underline">Privacy Policy</span>
                  </Link>
                  .
                </p>
                {alert.message !== "" && <Alert alert={alert} />}
              </div>
            </div>
            {/* Right Section: Image */}
            <div className="relative sm:max-w-lg sm:mx-auto lg:mt-0 mt-12 lg:max-w-none lg:mx-0 lg:col-span-6 flex items-center">
              {/* Pattern */}
              <svg
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
                width={640}
                height={784}
                fill="none"
                viewBox="0 0 640 784"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                    x={118}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  y={72}
                  width={640}
                  height={640}
                  className="text-gray-50"
                  fill="currentColor"
                />
                <rect
                  x={118}
                  width={404}
                  height={784}
                  fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
                />
              </svg>
              {/* iPhone Mockup */}
              <div className="relative lg:-mt-20 mx-auto lg:max-w-md">
                <Image
                  className="mx-auto"
                  src={heroImage}
                  alt=""
                  width={300}
                  height={614}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );

  // Handle Form Submission
  async function handleSubmit(e) {
    e.preventDefault();

    setAlert({ message: "" });
    setLoading(true);

    try {
      // make request to lambda function here.
      let response = await fetch("/api/form-handler", {
        method: "POST",
        body: JSON.stringify({ email: email }),
      });

      const json = await response.json();

      if (response.status === 200) {
        setLoading(false);
        setEmail("");

        // After successful show alert.
        setAlert({
          type: "success",
          message:
            "Thank you for signing up. Check your mailbox for confirmation. Check spam if you don't see it!",
        });

        // Analytics
        ga.event({
          action: "sign_up",
        });
      } else if (response.status === 422) {
        setLoading(false);
        setAlert({
          type: "error",
          message: json.error,
        });
        // Analytics
        ga.event({
          action: "exception",
          params: {
            description: json.error,
          },
        });
      } else {
        setLoading(false);
        setAlert({
          type: "error",
          message:
            "Something went wrong. Please try again or contact hello@ratio.app!",
        });
        // Analytics
        ga.event({
          action: "exception",
          params: {
            description: error.message,
          },
        });
      }
    } catch (error) {
      setLoading(false);
      setAlert({
        type: "error",
        message: error.message ?? "Something went wrong. Please try again or contact hello@ratio.app!",
      });

      // Analytics
      ga.event({
        action: "exception",
        params: {
          description: error.message ?? "500 error",
        },
      });
    }
  }
}
