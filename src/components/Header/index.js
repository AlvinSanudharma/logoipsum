import React, { useState } from "react";
import Link from "next/link";

import Logo from "images/logo.svg";

function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <header className="bg-white">
      <div className="container px-auto mx-auto h-24 flex items-center relative">
        <span className="">
          <Logo />
        </span>
        <button
          onClick={() => setIsMenuActive((prevState) => !prevState)}
          className={[
            "z-30 w-7 h-7 flex flex-col items-center transition-all gap-y-1 hover:gap-y-2 ml-auto lg:ml-8 xl:hidden",
            isMenuActive ? "fixed right-12" : "relative",
          ].join(" ")}
        >
          <span
            className={[
              "w-7 h-1 bg-body transition-all",
              isMenuActive ? "absolute top-3 rotate-45" : "rotate-0",
            ].join(" ")}
          ></span>
          <span
            className={[
              "w-7 h-1 bg-body transition-all",
              isMenuActive ? "absolute top-3 rotate-45" : "rotate-0",
            ].join(" ")}
          ></span>
          <span
            className={[
              "w-7 h-1 bg-body transition-all",
              isMenuActive ? "absolute top-3 -rotate-45" : "rotate-0",
            ].join(" ")}
          ></span>
        </button>
        <div
          className={[
            "fixed lg:relative inset-0 z-[12] flex flex-col items-center justify-center lg:justify-between lg:flex-row bg-white w-full gap-y-8",
            isMenuActive
              ? "opacity-100"
              : "opacity-0 lg:opacity-100 invisible lg:visible",
          ].join(" ")}
        >
          <ul
            className={[
              "mx-auto gap-x-12",
              isMenuActive
                ? "flex flex-col lg:flex-row items-center gap-y-8"
                : "hidden xl:flex",
            ].join(" ")}
          >
            <li className="">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="">
              <Link href="/">
                <a>Fatures</a>
              </Link>
            </li>
            <li className="">
              <Link href="/story">
                <a>Story</a>
              </Link>
            </li>
            <li className="">
              <Link href="/pricing">
                <a>Home</a>
              </Link>
            </li>
            <li className="">
              <Link href="/showcase">
                <a>Showcase</a>
              </Link>
            </li>
          </ul>
          <ul
            className={[
              "gap-x-4 gap-y-8",
              isMenuActive
                ? "flex flex-col lg:flex-row items-center justify-center"
                : "hidden lg:flex lg:ml-auto",
            ].join(" ")}
          >
            <li className="">
              <Link href="/contact-us">
                <a className="py-3 px-8 border border-body text-body rounded-full">
                  Contact Us
                </a>
              </Link>
            </li>
            <li className="">
              <Link href="/sign-in">
                <a className="py-3 px-8 border border-transparent bg-body hover:bg-gray-600 text-white hover:text-body rounded-full transition-all duration-200">
                  Sign In
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
