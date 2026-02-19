"use client";
import useEmblaCarousel from "embla-carousel-react";
import  Fade  from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const images = [
    "/carousal-images/estimation-bg-img-1.png",
    "/carousal-images/estimation-bg-img-2.png",
    "/carousal-images/estimation-bg-img-3.png",
    "/carousal-images/estimation-bg-img-4.png",
]


export default function HeroCarousel() {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        duration: 30, // Higher number = slower/smoother transition (default is 25)
        skipSnaps: false,
    }, [
      Fade(),
      Autoplay({ delay: 5000, stopOnInteraction: false }) // Autoplay every 5 seconds
    ]);

    return (
    <section className="relative w-full overflow-hidden">
      {/* Sliding Background Images */}
      <div className="absolute inset-0 w-full" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((src, index) => (
            <div key={index} className="relative flex-[0_0_100%] min-w-0 h-full">
              <Image
                src={src}
                alt={`Hero background ${index + 1}`}
                fill
                className="object-cover object-center"
                priority={index === 0}
                sizes="100vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-1" />

      {/* Hero Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-6 md:px-12 lg:px-24">
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center space-y-6  my-6 sm:my-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            BID ESTIMATION SERVICE
          </h1>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight">
            WIN MORE BIDS. <br /> MAXIMIZE PROFITS. <br /> MINIMIZE RISK.
          </h1>
          <div className="space-y-2 md:space-y-0 hidden sm:block">
            <h2 className="text-base md:text-lg font-light text-white">
              Accurate & Timely Bid Estimating and Takeoffs for Construction Professionals.
            </h2>
            <p className="text-sm md:text-base font-medium text-white uppercase tracking-wider">
              Trusted by Contractors, Owners, & Cost Consultants NATIONWIDE
            </p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 sm:px-10 sm:py-5 rounded-lg text-base md:text-lg transition duration-300 transform hover:scale-105 shadow-xl">
            GET YOUR FREE ESTIMATE CONSULTATION
          </button>
          <a href="#samples" className="text-white/70 hover:text-white transition duration-300">
            View Estimation Samples →
          </a>
        </div>
      </div>
    </section>
  );

}

