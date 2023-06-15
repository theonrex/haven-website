import React from "react";
import "flowbite";
import HavenLogo from "../../public/images/havenlogo.png";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed bg-black w-full z-20 top-0 left-0 ">
      <div className="max-w-screen-xl nav_hide flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center ">
          <Image
            src={HavenLogo}
            width={35}
            height={44}
            className=" mr-3"
            alt="Haven Logo"
          />

          <span className="self-center havenSwap text-2xl font-semibold whitespace-nowrap ">
            Haven Swap
          </span>
        </Link>
        <div className="flex md:order-2">
          <button
            type="button"
            className="orange_btn text-black  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0  dark:focus:ring-blue-800"
          >
            Get started
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:  dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg md:flex-row md:space-x-8 md:mt-0  md:bg-black bg-zinc-950 ">
            <li>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4  rounded "
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link href="/wallet" className="block py-2 pl-3 pr-4  rounded ">
                Wallet
              </Link>
            </li>
            <li>
              <Link href="/market" className="block py-2 pl-3 pr-4  rounded ">
                Market
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2 pl-3 pr-4  rounded ">
                Our Rates
              </Link>
            </li>{" "}
            <li>
              <Link href="#" className="block py-2 pl-3 pr-4  rounded ">
                Trade Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
