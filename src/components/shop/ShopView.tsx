"use client";

import React, { useState, useMemo } from "react";
import { Product } from "@/types/product";
import ShopHeader from "./ShopHeader";
import ProductCard from "@/components/home/ProductCard";

interface ShopViewProps {
  title: string;
  description: string;
  initialProducts: Product[];
}

export default function ShopView({
  title,
  description,
  initialProducts,
}: ShopViewProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"default" | "price-asc" | "price-desc">(
    "default"
  );

  // Filter & Search logic
  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesSize = selectedSize
        ? product.sizes.includes(selectedSize)
        : true;

      return matchesSearch && matchesSize;
    });
  }, [initialProducts, searchQuery, selectedSize]);

  return (
    <div className="w-full flex flex-col bg-white">
      {/* Category Header */}
      <ShopHeader
        title={title}
        description={description}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onFilterClick={() => setIsFilterOpen(!isFilterOpen)}
        isFilterOpen={isFilterOpen}
      />

      {/* Filter Options Drawer (When Filter button is clicked) */}
      {isFilterOpen && (
        <div className="w-full bg-neutral-50 border-b border-black px-6 sm:px-8 md:px-12 py-4 flex flex-wrap items-center justify-between gap-4 transition-all">
          {/* Size Filter */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-neutral-600 uppercase tracking-wider">
              Ukuran:
            </span>
            <button
              type="button"
              onClick={() => setSelectedSize(null)}
              className={`px-3 py-1 rounded-full text-xs font-normal transition-colors cursor-pointer ${
                selectedSize === null
                  ? "bg-neutral-900 text-white"
                  : "bg-white border border-neutral-300 text-neutral-700 hover:border-neutral-900"
              }`}
            >
              Semua
            </button>
            {["M", "L", "XL"].map((size) => (
              <button
                key={size}
                type="button"
                onClick={() =>
                  setSelectedSize(selectedSize === size ? null : size)
                }
                className={`w-7 h-7 rounded-full text-xs font-normal flex items-center justify-center transition-colors cursor-pointer ${
                  selectedSize === size
                    ? "bg-neutral-900 text-white"
                    : "bg-white border border-neutral-300 text-neutral-700 hover:border-neutral-900"
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Result Count */}
          <div className="text-xs text-neutral-500">
            Menampilkan{" "}
            <span className="font-medium text-neutral-900">
              {filteredProducts.length}
            </span>{" "}
            produk
          </div>
        </div>
      )}

      {/* 3-Column Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-b border-black">
          {filteredProducts.map((product, idx) => {
            const isNotLastInRowDesktop = (idx + 1) % 3 !== 0;
            const isNotLastInRowTablet = (idx + 1) % 2 !== 0;
            const isFirstRowDesktop = idx < 3;
            const isFirstTwoRowsTablet = idx < 4;
            const isNotLastMobile = idx < filteredProducts.length - 1;

            return (
              <div
                key={product.id}
                className={`border-black ${
                  isNotLastInRowDesktop ? "lg:border-r" : ""
                } ${
                  isNotLastInRowTablet ? "sm:max-lg:border-r" : ""
                } ${
                  isFirstRowDesktop ? "lg:border-b" : ""
                } ${
                  isFirstTwoRowsTablet ? "sm:max-lg:border-b" : ""
                } ${
                  isNotLastMobile ? "max-sm:border-b" : ""
                }`}
              >
                <ProductCard product={product} />
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="w-full py-24 px-6 text-center border-b border-black">
          <p className="text-sm sm:text-base text-neutral-600">
            Tidak ada produk yang cocok dengan pencarian &ldquo;{searchQuery}&rdquo;.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedSize(null);
            }}
            className="mt-4 px-6 py-2 border border-black rounded-full text-xs text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors cursor-pointer"
          >
            Reset Pencarian
          </button>
        </div>
      )}
    </div>
  );
}
