import Header from "components/Header";
import Hero from "components/Hero";
import Head from "next/head";
import Image from "next/image";

import Star from "images/star.svg";
import Globe from "images/globe.svg";
import Feather from "images/feather.svg";
import Rewards from "images/rewards.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Logo Ipsum</title>
        <meta
          name="description"
          content="Focus On Your Startup,
          We Take Care Of All 
        Your Legal"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="bg-body">
        <Hero />
        <section className="container mx-auto px-4 flex flex-col items-center pb-12 lg:pb-52">
          <h2 className="text-xl xl:text-[42px] text-white">
            Our Achievements
          </h2>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-y-8 gap-x-16 py-12">
            <div className="flex flex-col items-center text-white">
              <h6 className="font-bold text-6xl">12M</h6>
              <span className="text-[22px] text-gray-400">Startup Success</span>
            </div>
            <div className="bg-gray-400 w-px h-32 hidden lg:flex"></div>
            <div className="flex flex-col items-center text-white">
              <h6 className="font-bold text-6xl">350%</h6>
              <span className="text-[22px] text-gray-400">Company Growth</span>
            </div>
            <div className="bg-gray-400 w-px h-32 hidden lg:flex"></div>
            <div className="flex flex-col items-center text-white">
              <h6 className="font-bold text-6xl">8M</h6>
              <span className="text-[22px] text-gray-400">
                Global Investors
              </span>
            </div>
          </div>
        </section>
        <section className="container mx-auto px-4 pb-44">
          <div className="flex flex-wrap xl:flex-nowrap gap-y-24 justify-center items-center gap-x-28">
            <div className="flex w-full md:w-6/12  xl:w-5/12">
              <div className="relative">
                <div className="max-w-[322px] z-10 absolute top-0 left-0 md:-top-14 md:-left-14 lg:-top-28 lg:-left-28 rounded-3xl bg-white p-4 hidden md:flex flex-col">
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
                  <span className="text-sm text-body-gray">
                    CEO of DoyanMakan
                  </span>
                </div>
                <span className="absolute w-full top-5 -right-5 h-full border border-white rounded-[60px]"></span>
                <div className="rounded-[60px] overflow-hidden ">
                  <div className="relative max-w-full md:w-[419px] md:h-[500px] xl:w-[519px] xl:h-[600px] 2xl:w-[619px] 2xl:h[700px]">
                    <Image
                      className="object-cover"
                      layout="fill"
                      src="/images/people-meeting.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 xl:w-4/12">
              <h3 className="text-white text-3xl xl:text-[42px] mb-16">
                Your Startup Would Grow Faster
              </h3>
              <ul className="flex flex-col gap-y-12 pr-0 lg:pr-24">
                <li className="flex gap-x-8">
                  <span className="rounded-full flex flex-none items-center justify-center w-12 h-12 lg:w-20 lg:h-20 bg-blue-700 text-white">
                    <Globe />
                  </span>
                  <span className="flex flex-col">
                    <h6 className="text-white text-base xl:text-2xl">
                      Act Global
                    </h6>
                    <span className="text-gray-400 text-sm xl:text-xl">
                      We lorem ipsum doc printed namun tak jauh beda kok
                    </span>
                  </span>
                </li>
                <li className="flex gap-x-8">
                  <span className="rounded-full flex flex-none items-center justify-center w-12 h-12 lg:w-20 lg:h-20 bg-[#FF1EC0] text-white">
                    <Feather />
                  </span>
                  <span className="flex flex-col">
                    <h6 className="text-white text-base xl:text-2xl">
                      Act Global
                    </h6>
                    <span className="text-gray-400 text-sm xl:text-xl">
                      We lorem ipsum doc printed namun tak jauh beda kok
                    </span>
                  </span>
                </li>
                <li className="flex gap-x-8">
                  <span className="rounded-full flex flex-none items-center justify-center w-12 h-12 lg:w-20 lg:h-20 bg-[#731EFF] text-white">
                    <Rewards />
                  </span>
                  <span className="flex flex-col">
                    <h6 className="text-white text-base xl:text-2xl">
                      Act Global
                    </h6>
                    <span className="text-gray-400 text-sm xl:text-xl">
                      We lorem ipsum doc printed namun tak jauh beda kok
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
