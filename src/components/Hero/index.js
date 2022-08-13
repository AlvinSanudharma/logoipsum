import Link from "next/link";
import React from "react";
import Image from "next/image";

import Lock from "images/lock.svg";
import Star from "images/star.svg";

import Partner from "components/Partner";

export default function Hero() {
  return (
    <section className="container mx-auto flex items-center lg:items-start gap-x-10 pb-16 mb-20">
      <div className="w-full xl:w-7/12 pr-10 pt-32">
        <h1 className="text-white font-bold text-2xl xl:text-4xl 2xl:text-[55px] leading-relaxed xl:leading-relaxed pb-6">
          Focus On Your Startup, We Take Care Of All Your Legal
        </h1>
        <p
          className="text-body-gray text-sm lg:text-lg leading-relaxed pr-0 xl:pr-32 pb-8
        "
        >
          Lorem ipsum dolor funding documen investo can be difficult and
          frustated but here we are taking care all of dolor si amet money
          bigger.
        </p>
        <Link href="#get-started">
          <a
            href=""
            className="bg-yellow text-brown font-semibold py-2 lg:py-4 px-6 lg:px-8 rounded-full inline-flex mb-12"
          >
            {" "}
            Get Started
          </a>
        </Link>
        <hr className="pb-16 border-[#525B74]" />
        <Partner />
      </div>
      <div className="w-full xl:w-6/12 relative hidden lg:flex">
        <div className="md:w-[477px] md:h-[350px] xl:w-[667px] xl:h-[550px] 2xl:w-[877px] 2xl:h-[750px] md:rounded-bl-[150px] xl:rounded-bl-[250px] 2xl:rounded-bl-[350px] border absolute -left-10 top-10">
          <span className="w-32 h-32 rounded-full bg-white absolute left-10 bottom-10 flex items-center justify-center flex-col z-20">
            <span className="bg-green-100 text-green-500 w-14 h-14 inline-flex items-center justify-center rounded-full  p-2 mb-2">
              <Lock />
            </span>
            <span className="text-sm font-medium text-body">Trusted</span>
          </span>
          <div className="max-w[322px] z-10 absolute lg:-bottom-20 xl:-bottom-10 lg:right-20 xl:right-10 rounded-3xl bg-white p-4 flex flex-col">
            <span className="flex gap-x-1 text-yellow mb-4">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </span>
            <span className="text-lg mb-6 text-body">
              Startup Law just make all our <br /> missions went easier.
            </span>
            <span className="font-medium">Anna Bellani</span>
            <span className="text-sm text-body-gray">CEO of DoyanMakan</span>
          </div>
        </div>
        <div className="md:w-[477px] md:h-[350px] xl:w-[667px] xl:h-[550px] 2xl:w-[877px] 2xl:h-[750px] md:rounded-bl-[150px] xl:rounded-bl-[250px] 2xl:rounded-bl-[350px] overflow-hidden">
          <div className="relative">
            <Image
              layout="responsive"
              className="object-cover"
              width="100%"
              height="100%"
              alt=""
              src="/images/hero-images.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
