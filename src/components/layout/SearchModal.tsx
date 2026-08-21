"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { catalogProducts } from "@/data/products";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when opened and lock scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      document.body.style.overflow = "";
      setQuery("");
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Live filter products
  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return catalogProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category?.toLowerCase().includes(q)
    );
  }, [query]);

  const quickTags = [
    { label: "Racing Series", href: "/shop/racing-series" },
    { label: "Anime Series", href: "/shop/anime-series" },
    { label: "Casual", href: "/shop/casual" },
    { label: "Boxy Fit", tag: "boxy fit" },
    { label: "Verstappen", tag: "verstappen" },
  ];

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-16 sm:pt-24 px-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white border border-black shadow-2xl flex flex-col overflow-hidden max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center border-b border-black px-5 py-3">
          {/* Search Icon */}
          <div className="text-neutral-900 mr-3">
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
          </div>

          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari produk, series, apparel..."
            className="flex-1 text-sm sm:text-base text-neutral-950 bg-transparent focus:outline-none placeholder:text-neutral-400 font-normal"
          />

          {/* Clear / Close Button */}
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="p-1 text-neutral-400 hover:text-neutral-900 transition-colors mr-2 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          ) : null}

          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="p-1.5 text-neutral-500 hover:text-neutral-950 transition-colors cursor-pointer border border-neutral-200 rounded-md hover:border-black"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Modal Body / Results */}
        <div className="overflow-y-auto p-5">
          {!query.trim() ? (
            /* Default Suggestions */
            <div>
              <p className="text-xs uppercase tracking-wider text-neutral-500 font-medium mb-3">
                Kategori & Pencarian Populer
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {quickTags.map((t, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      if (t.tag) {
                        setQuery(t.tag);
                      } else if (t.href) {
                        onClose();
                        window.location.href = t.href;
                      }
                    }}
                    className="px-3.5 py-1.5 bg-neutral-100 hover:bg-neutral-900 hover:text-white rounded-full text-xs text-neutral-800 transition-colors cursor-pointer"
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              <p className="text-xs uppercase tracking-wider text-neutral-500 font-medium mb-3">
                Produk Rekomendasi
              </p>
              <div className="divide-y divide-neutral-100">
                {catalogProducts.slice(0, 3).map((prod) => (
                  <Link
                    key={prod.id}
                    href={prod.href || "/products/verstappen-kick"}
                    onClick={onClose}
                    className="flex items-center gap-4 py-3 hover:bg-neutral-50 px-2 rounded transition-colors group"
                  >
                    <div className="w-12 h-12 bg-neutral-100 rounded flex items-center justify-center shrink-0 p-1">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={prod.imageSrc}
                        alt={prod.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-normal text-neutral-900 group-hover:underline truncate">
                        {prod.name}
                      </p>
                      <p className="text-xs text-neutral-500 truncate">
                        {prod.description}
                      </p>
                    </div>
                    <span className="text-xs font-normal text-neutral-950 shrink-0">
                      {prod.price}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ) : searchResults.length > 0 ? (
            /* Search Results */
            <div className="divide-y divide-neutral-100">
              <p className="text-xs text-neutral-500 mb-3">
                Ditemukan {searchResults.length} produk untuk &ldquo;{query}&rdquo;
              </p>
              {searchResults.map((prod) => (
                <Link
                  key={prod.id}
                  href={prod.href || "/products/verstappen-kick"}
                  onClick={onClose}
                  className="flex items-center gap-4 py-3 hover:bg-neutral-50 px-2 rounded transition-colors group"
                >
                  <div className="w-14 h-14 bg-neutral-100 rounded flex items-center justify-center shrink-0 p-1">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={prod.imageSrc}
                      alt={prod.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-normal text-neutral-900 group-hover:underline truncate">
                      {prod.name}
                    </p>
                    <p className="text-xs text-neutral-500 truncate">
                      {prod.description}
                    </p>
                  </div>
                  <span className="text-sm font-normal text-neutral-950 shrink-0">
                    {prod.price}
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            /* No Results */
            <div className="py-12 text-center">
              <p className="text-sm text-neutral-600">
                Tidak ada produk yang cocok dengan &ldquo;{query}&rdquo;.
              </p>
              <p className="text-xs text-neutral-400 mt-1">
                Coba gunakan kata kunci lain seperti &ldquo;Racing&rdquo;, &ldquo;Boxy&rdquo;, atau &ldquo;Cotton&rdquo;.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
