"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function HeroSection({
  title = "LaNouvelle",
  description = "Lorem ipsum dolor sit amet consectetur. Urna luctus consectetur imperdiet blandit.",
  buttonText = "Shop",
  buttonLink = "/shop",
  imageSrc = "/images/hero.jpg",
  imageAlt = "LaNouvelle Hero Banner",
}: HeroSectionProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="w-full bg-white border-b border-black">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[550px] lg:min-h-[calc(100vh-80px)] divide-y md:divide-y-0 md:divide-x divide-black">
        {/* Left Column: Typography & Action */}
        <div className="flex flex-col justify-end px-5 sm:px-6 md:px-8 lg:px-10 pb-5 sm:pb-6 md:pb-8 pt-12 md:pt-16 order-2 md:order-1">
          <div className="max-w-md">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-950">
              {title}
            </h1>
            <p className="mt-4 sm:mt-5 text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-sm">
              {description}
            </p>
            <div className="mt-7 sm:mt-9">
              <Link
                href={buttonLink}
                className="inline-flex items-center justify-center min-w-[140px] px-8 py-2.5 border border-black rounded-full text-xs sm:text-sm font-normal text-neutral-950 hover:bg-neutral-950 hover:text-white transition-colors duration-200"
              >
                {buttonText}
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual Slot */}
        <div className="relative w-full min-h-[380px] sm:min-h-[460px] md:min-h-[550px] lg:min-h-[calc(100vh-80px)] bg-neutral-100 overflow-hidden order-1 md:order-2 flex items-center justify-center">
          {imageSrc && !imageError ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover object-center absolute inset-0"
              onError={() => setImageError(true)}
            />
          ) : (
            /* Elegant Placeholder when user has not yet dropped their image file */
            <div className="flex flex-col items-center justify-center bg-neutral-100 text-neutral-400 p-8 text-center select-none w-full h-full">
              <div className="w-16 h-16 rounded-full border border-neutral-300 flex items-center justify-center mb-3">
                <svg
                  className="w-8 h-8 text-neutral-400"
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
              <span className="text-xs uppercase tracking-wider font-medium text-neutral-600">
                Slot Gambar Hero Produk
              </span>
              <span className="text-[11px] text-neutral-500 mt-1 max-w-xs">
                File: <code className="text-neutral-700 font-mono bg-neutral-200 px-1 py-0.5 rounded">public/images/hero-banner.jpg</code>
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
