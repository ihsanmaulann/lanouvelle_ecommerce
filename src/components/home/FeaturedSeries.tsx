import React from "react";
import Link from "next/link";
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

interface FeaturedSeriesProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  products: Product[];
}

export default function FeaturedSeries({
  title = "New",
  subtitle = "Racing Series",
  buttonText = "Shop Now",
  buttonLink = "/shop/racing-series",
  products,
}: FeaturedSeriesProps) {
  return (
    <section className="w-full bg-white border-b border-black">
      <div className="flex flex-col lg:flex-row">
        {/* Left / Top Column: Category Info & CTA */}
        <div className="w-full lg:w-[28%] xl:w-[25%] p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-start border-b lg:border-b-0 lg:border-r border-black shrink-0">
          <div>
            <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-neutral-950">
              {title}
            </h2>
            <p className="text-xl sm:text-2xl font-normal text-neutral-950 mt-2">
              {subtitle}
            </p>
            <div className="mt-6 sm:mt-8">
              <Link
                href={buttonLink}
                className="inline-flex items-center justify-center px-7 py-2.5 border border-black rounded-full text-xs sm:text-sm font-normal text-neutral-950 hover:bg-neutral-950 hover:text-white transition-colors duration-200"
              >
                {buttonText}
              </Link>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-black">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
