import { CheckCircleIcon, XIcon } from "@heroicons/react/solid";
import { DeviceMobileIcon } from "@heroicons/react/outline";
import Image from "next/image";
import heroImage from "../public/hero-image.png";
import { useState } from "react";
import Alert from "./Alert";
import Link from "next/link";

import * as ga from "../lib/ga";
import { AppStoreLink } from "./AppStoreLink";
import { PlayStoreLink } from "./PlayStoreLink";

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
      </div>

      <div className="relative pt-6 sm:pb-24 lg:pb-8">
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Left Section: Copy */}
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1>
                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-7xl">
                  <span className="block text-gray-900">
                    Build healthier
                    <br />
                    financial habits.
                  </span>
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Ratio App is an easy and secure way to track your finances and build healthy financial habits. Unlock the most valuable insights from your financial data so that you can make better financial decisions.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
                <AppStoreLink />
                <PlayStoreLink />
              </div>
            </div>
            {/* Right Section: Image */}
            <div className="relative sm:max-w-lg sm:mx-auto lg:mt-0 mt-12 lg:max-w-none lg:mx-0 lg:col-span-6 flex items-center">
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
            "Thank you for signing up. Check your mailbox for a confirmation mail from Ratio App. Check spam if you don't see it!",
        });

        // Analytics
        ga.event({
          action: "sign_up",
        });
      } else if (response.status === 401) {
        setLoading(false)
        setAlert({
          type: "error",
          message: "Your subscription is pending confirmation. Please check your inbox for a confirmation mail from Ratio App. Check your spam folder if necessary."
        })
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
