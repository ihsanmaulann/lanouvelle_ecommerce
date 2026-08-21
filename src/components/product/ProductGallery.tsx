"use client";

import React, { useState } from "react";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({
  images,
  productName,
}: ProductGalleryProps) {
  const galleryImages = images.length > 0 ? images : ["/images/product.png"];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  const currentImage = galleryImages[selectedIndex] || galleryImages[0];

  return (
    <div className="w-full flex flex-col bg-white">
      {/* Big Main Image Container */}
      <div className="relative w-full aspect-square bg-[#f5f5f5] flex items-center justify-center border-b border-black overflow-hidden p-8 sm:p-12 lg:p-16">
        {!imageErrors[selectedIndex] ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={currentImage}
            alt={`${productName} view ${selectedIndex + 1}`}
            className="w-full h-full object-contain max-h-[500px] transition-transform duration-300"
            onError={() => handleImageError(selectedIndex)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-neutral-400 select-none">
            <svg
              className="w-16 h-16 text-neutral-300 mb-2"
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
            <span className="text-xs font-medium text-neutral-500">
              Gambar Produk
            </span>
          </div>
        )}
      </div>

      {/* 3 Thumbnails Strip */}
      <div className="grid grid-cols-3 divide-x divide-black border-b border-black">
        {galleryImages.slice(0, 3).map((imgSrc, idx) => {
          const isSelected = selectedIndex === idx;

          return (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedIndex(idx)}
              className={`relative aspect-square p-4 sm:p-6 bg-white flex items-center justify-center transition-all cursor-pointer ${
                isSelected
                  ? "bg-neutral-50 ring-2 ring-inset ring-neutral-900"
                  : "hover:bg-neutral-50 opacity-80 hover:opacity-100"
              }`}
            >
              {!imageErrors[idx] ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={imgSrc}
                  alt={`${productName} thumbnail ${idx + 1}`}
                  className="w-full h-full object-contain"
                  onError={() => handleImageError(idx)}
                />
              ) : (
                <span className="text-[10px] text-neutral-400">View {idx + 1}</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
