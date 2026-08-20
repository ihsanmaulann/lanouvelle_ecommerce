import React from "react";
import Link from "next/link";

interface FooterProps {
  brandName?: string;
  tagline?: string;
}

export default function Footer({
  brandName = "LaNouvelle",
  tagline = "Lorem ipsum dolor sit amet consectetur. Suscipit pharetra proin volutpat id tortor odio posuere.",
}: FooterProps) {
  return (
    <footer className="w-full bg-white border-b border-black">
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-black">
        {/* Left Column: Brand & Description */}
        <div className="p-8 sm:p-12 md:p-14 lg:p-16 flex flex-col justify-center">
          <div className="max-w-md">
            <h3 className="text-4xl sm:text-5xl font-normal tracking-tight text-neutral-950">
              {brandName}
            </h3>
            <p className="mt-3.5 text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-sm">
              {tagline}
            </p>
          </div>
        </div>

        {/* Right Column: Navigation & Social Links */}
        <div className="p-8 sm:p-12 md:p-14 lg:p-16 flex items-center">
          <div className="grid grid-cols-2 gap-10 sm:gap-16 md:gap-20 w-full max-w-sm">
            {/* Nav Pages */}
            <div className="flex flex-col space-y-4 sm:space-y-5">
              <Link
                href="/"
                className="text-xs sm:text-sm font-normal text-neutral-950 hover:opacity-60 transition-opacity"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-xs sm:text-sm font-normal text-neutral-950 hover:opacity-60 transition-opacity"
              >
                About
              </Link>
              <Link
                href="/shop"
                className="text-xs sm:text-sm font-normal text-neutral-950 hover:opacity-60 transition-opacity"
              >
                Product
              </Link>
            </div>

            {/* Social / Channels */}
            <div className="flex flex-col space-y-4 sm:space-y-5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-normal text-neutral-950 hover:opacity-60 transition-opacity"
              >
                Instagram
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-normal text-neutral-950 hover:opacity-60 transition-opacity"
              >
                Tiktok
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-normal text-neutral-950 hover:opacity-60 transition-opacity"
              >
                Whatsapp
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
