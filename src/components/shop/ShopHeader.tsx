"use client";

import React from "react";

interface ShopHeaderProps {
  title: string;
  description: string;
  searchQuery: string;
  onSearchChange: (val: string) => void;
  onFilterClick?: () => void;
  isFilterOpen?: boolean;
}

export default function ShopHeader({
  title,
  description,
  searchQuery,
  onSearchChange,
  onFilterClick,
  isFilterOpen,
}: ShopHeaderProps) {
  return (
    <div className="w-full bg-white border-b border-black">
      <div className="px-6 sm:px-8 md:px-12 py-8 sm:py-10 md:py-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        {/* Left Side: Title & Description */}
        <div className="max-w-xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-950">
            {title}
          </h1>
          <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Right Side: Search Bar & Filter Button */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          {/* Search Input Bar */}
          <div className="relative flex-1 md:w-72 lg:w-80">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search products..."
              className="w-full h-11 pl-5 pr-11 border border-neutral-900 rounded-full text-xs sm:text-sm text-neutral-900 bg-white placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-black transition-all"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-900 pointer-events-none">
              <svg
                className="w-4 h-4"
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
            </div>
          </div>

          {/* Filter Button */}
          <button
            type="button"
            aria-label="Filter products"
            onClick={onFilterClick}
            className={`h-11 w-11 shrink-0 border border-neutral-900 rounded-lg flex items-center justify-center transition-colors cursor-pointer ${
              isFilterOpen
                ? "bg-neutral-900 text-white"
                : "bg-white text-neutral-900 hover:bg-neutral-900 hover:text-white"
            }`}
          >
            {/* 3 Horizontal Sliders Icon matching screenshot */}
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
