"use client";

import React, { useState } from "react";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex flex-col justify-between p-6 sm:p-8 md:p-10 bg-white h-full">
      <div>
        {/* Product Image Container */}
        <div className="relative w-full aspect-square bg-neutral-100 rounded-sm overflow-hidden flex items-center justify-center mb-6">
          {/* Badge */}
          {product.badge && (
            <div className="absolute top-4 left-4 z-10">
              <span className="inline-block bg-white px-3.5 py-1 rounded-full text-[11px] font-normal text-neutral-800 shadow-sm border border-neutral-100">
                {product.badge}
              </span>
            </div>
          )}

          {/* Product Image / Slot */}
          {product.imageSrc && !imageError ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={product.imageSrc}
              alt={product.name}
              className="w-full h-full object-contain p-4"
              onError={() => setImageError(true)}
            />
          ) : (
            /* Clean visual placeholder */
            <div className="flex flex-col items-center justify-center p-6 text-center text-neutral-400 select-none">
              <svg
                className="w-10 h-10 text-neutral-300 mb-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <span className="text-[11px] font-medium text-neutral-500">
                Slot Gambar Produk
              </span>
              <span className="text-[10px] text-neutral-400 mt-0.5">
                {product.imageSrc}
              </span>
            </div>
          )}
        </div>

        {/* Info Row: Title & Price */}
        <div className="flex items-center justify-between gap-2 text-sm sm:text-base font-normal text-neutral-950">
          <span>{product.name}</span>
          <span className="shrink-0">{product.price}</span>
        </div>

        {/* Description / Specs */}
        <p className="mt-1.5 text-[11px] sm:text-xs text-neutral-500 leading-relaxed">
          {product.description}
        </p>

        {/* Sizes */}
        {product.sizes && product.sizes.length > 0 && (
          <div className="flex items-center gap-1.5 mt-4">
            {product.sizes.map((size) => (
              <span
                key={size}
                className="w-7 h-7 rounded-full bg-neutral-100 text-[11px] font-normal text-neutral-700 flex items-center justify-center"
              >
                {size}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Status / Action */}
      <div className="mt-8 pt-2">
        {product.status === "Coming Soon" ? (
          <span className="text-xs sm:text-sm font-normal text-neutral-950 block">
            Coming Soon
          </span>
        ) : (
          <a
            href={product.href || "/shop"}
            className="inline-flex items-center justify-center px-6 py-2 border border-black rounded-full text-xs sm:text-sm font-normal text-neutral-950 hover:bg-neutral-950 hover:text-white transition-colors duration-200"
          >
            {product.status || "Shop Now"}
          </a>
        )}
      </div>
    </div>
  );
}
