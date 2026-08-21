"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import SearchModal from "./SearchModal";

interface NavbarProps {
  logoSrc?: string;
}

export default function Navbar({ logoSrc }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopSubmenuOpen, setShopSubmenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [hasLogoError, setHasLogoError] = useState(false);

  const shopCategories = [
    { label: "Racing Series", href: "/shop/racing-series" },
    { label: "Anime Series", href: "/shop/anime-series" },
    { label: "Casual", href: "/shop/casual" },
    { label: "Coming Soon", href: "/shop/coming-soon" },
  ];

  return (
    <>
      <header className="w-full bg-white border-b border-black sticky top-0 z-50">
        <div className="w-full px-6 md:px-12 h-20 flex items-center justify-between">
          {/* Left Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-normal text-neutral-900">
            <button
              type="button"
              onClick={() => setShopSubmenuOpen(!shopSubmenuOpen)}
              className={`hover:opacity-70 transition-opacity tracking-normal cursor-pointer flex items-center gap-1 ${
                shopSubmenuOpen ? "font-medium" : ""
              }`}
            >
              Shop
            </button>
            <Link
              href="/about"
              className="hover:opacity-70 transition-opacity tracking-normal"
            >
              About
            </Link>
          </nav>

          {/* Center / Left Logo */}
          <div className="flex-1 md:flex-initial flex items-center justify-start md:justify-center">
            <Link href="/" className="inline-block py-2">
              {logoSrc && !hasLogoError ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={logoSrc}
                  alt="LaNouvelle"
                  className="h-7 sm:h-8 md:h-10 w-auto object-contain"
                  onError={() => setHasLogoError(true)}
                />
              ) : (
                /* Handwritten / Signature Logo Style matching the design */
                <span className="font-serif italic font-semibold text-2xl md:text-3xl tracking-tight text-neutral-950 select-none">
                  LaNouvelle
                </span>
              )}
            </Link>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center gap-6 md:gap-8">
            <Link
              href="/login"
              className="hidden md:inline-block text-sm font-normal text-neutral-900 hover:opacity-70 transition-opacity"
            >
              Login
            </Link>

            {/* Search Button */}
            <button
              type="button"
              aria-label="Search"
              onClick={() => setIsSearchOpen(true)}
              className="p-1 text-neutral-900 hover:opacity-70 transition-opacity focus:outline-none cursor-pointer"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1 text-neutral-900 focus:outline-none cursor-pointer"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Shop Subcategory Bar (Toggles on clicking Shop) */}
      {shopSubmenuOpen && (
        <div className="w-full bg-white border-t border-black px-6 md:px-12 py-3.5 flex items-center gap-6 sm:gap-8 md:gap-10 overflow-x-auto text-xs sm:text-sm font-normal text-neutral-900 transition-all">
          {shopCategories.map((cat) => (
            <Link
              key={cat.label}
              href={cat.href}
              className="whitespace-nowrap hover:opacity-60 transition-opacity"
            >
              {cat.label}
            </Link>
          ))}
        </div>
      )}

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white px-6 py-5 flex flex-col gap-4">
          <div>
            <button
              type="button"
              onClick={() => setShopSubmenuOpen(!shopSubmenuOpen)}
              className="text-base text-neutral-900 font-normal hover:opacity-70 flex items-center justify-between w-full"
            >
              <span>Shop</span>
              <span className="text-xs">{shopSubmenuOpen ? "▲" : "▼"}</span>
            </button>
            {shopSubmenuOpen && (
              <div className="mt-3 pl-4 flex flex-col gap-2.5 border-l border-neutral-200">
                {shopCategories.map((cat) => (
                  <Link
                    key={cat.label}
                    href={cat.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm text-neutral-600 hover:text-neutral-950"
                  >
                    {cat.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-neutral-900 font-normal hover:opacity-70"
          >
            About
          </Link>
          <Link
            href="/login"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-neutral-900 font-normal hover:opacity-70"
          >
            Login
          </Link>
        </div>
      )}
    </header>

    {/* Search Modal Overlay */}
    <SearchModal
      isOpen={isSearchOpen}
      onClose={() => setIsSearchOpen(false)}
    />
  </>
  );
}
