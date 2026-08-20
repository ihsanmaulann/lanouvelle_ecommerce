"use client";

import React, { useState } from "react";
import Link from "next/link";

interface EverydaySectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function EverydaySection({
  title = "Made for Your Everyday",
  description = "Designed for comfort and made to fit your everyday style. Discover pieces that are easy to wear and made to stand out.",
  buttonText = "Explore Collection",
  buttonLink = "/collections/everyday",
  imageSrc = "/images/hero.jpg",
  imageAlt = "Made for Your Everyday Collection",
}: EverydaySectionProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="w-full bg-white border-b border-black">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px] md:min-h-[720px] lg:min-h-[calc(100vh-80px)] divide-y md:divide-y-0 md:divide-x divide-black">
        {/* Left Column: Image Slot */}
        <div className="relative w-full min-h-[420px] sm:min-h-[500px] md:min-h-full bg-neutral-100 overflow-hidden flex items-center justify-center">
          {imageSrc && !imageError ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover object-center absolute inset-0"
              onError={() => setImageError(true)}
            />
          ) : (
            /* Visual Placeholder */
            <div className="flex flex-col items-center justify-center p-8 text-center text-neutral-400 select-none w-full h-full">
              <div className="w-20 h-20 rounded-full border border-neutral-300 flex items-center justify-center mb-4">
                <svg
                  className="w-10 h-10 text-neutral-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              </div>
              <span className="text-xs sm:text-sm uppercase tracking-wider font-medium text-neutral-600">
                Slot Gambar Everyday Banner
              </span>
              <span className="text-xs text-neutral-500 mt-1 max-w-xs">
                File: <code className="text-neutral-700 font-mono bg-neutral-200 px-1.5 py-0.5 rounded">public/images/everyday-banner.jpg</code>
              </span>
            </div>
          )}
        </div>

        {/* Right Column: Typography & Action */}
        <div className="flex flex-col justify-center p-8 sm:p-12 md:p-16 lg:p-24 xl:p-28">
          <div className="max-w-lg">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-neutral-950 leading-[1.1]">
              {title}
            </h2>
            <p className="mt-5 sm:mt-6 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-md">
              {description}
            </p>
            <div className="mt-8 sm:mt-10">
              <Link
                href={buttonLink}
                className="inline-flex items-center justify-center px-10 py-3 border border-black rounded-full text-xs sm:text-sm font-normal text-neutral-950 hover:bg-neutral-950 hover:text-white transition-colors duration-200"
              >
                {buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
