import { Fragment } from "react";
import Image from "next/image";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../public/icon-letter-logo.svg";
import Link from "next/link";

import * as ga from "../lib/ga";

// const navigation = [
//   { name: "Product", href: "#" },
//   { name: "Features", href: "#" },
//   { name: "Marketplace", href: "#" },
//   { name: "Company", href: "#" },
// ];

export default function Navbar() {
  return (
    <div className="relative py-6 bg-white">
      <Popover>
        <nav
          className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
          aria-label="Global"
        >
          <div className="flex items-center flex-1">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link href="/">
                <a>
                  <span className="sr-only">Ratio App</span>
                  <Image
                    className="h-8 w-auto sm:h-10"
                    src={logo}
                    alt="Ratio App Icon and Letter Logo"
                    width={180}
                    height={40}
                  />
                </a>
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ratiogreen-500">
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            {/* <div className="hidden md:block md:ml-10 md:space-x-10">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-medium text-gray-500 hover:text-gray-900"
                >
                  {item.name}
                </a>
              ))}
            </div> */}
          </div>
          <div className="hidden md:block text-right">
            <a
              href="https://blog.ratio.app"
              onClick={handleReadBlog}
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-ratiogreen-400 hover:bg-ratiogreen-700"
            >
              Follow our blog
            </a>
          </div>
        </nav>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <Image
                    className="h-8 w-auto sm:h-10"
                    src={logo}
                    alt="Ratio App Icon and Letter Logo"
                    width={180}
                    height={40}
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ratiogreen-500">
                    <span className="sr-only">Close main menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              {/* <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div> */}
              <a
                href="https://blog.ratio.app"
                onClick={handleReadBlog}
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-ratiogreen-600 hover:bg-ratiogreen-700"
              >
                Read our personal finance blog
              </a>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );

  async function handleReadBlog(e) {
    e.preventDefault();
    ga.event({
      action: "click",
      params: {
        cta: "Read our personal finance blog",
      },
    });
    window.location.href =
      "https://blog.ratio.app?utm_source=ratioappwebsite&utm_medium=main_nav&utm_campaign=external_website";
  }
}
