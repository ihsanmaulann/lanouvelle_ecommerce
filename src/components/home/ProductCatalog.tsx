import React from "react";
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

interface ProductCatalogProps {
  title?: string;
  subtitle?: string;
  products: Product[];
}

export default function ProductCatalog({
  title = "All Products",
  subtitle = "Best Collection",
  products,
}: ProductCatalogProps) {
  return (
    <section className="w-full bg-white border-b border-black">
      {/* Header Banner matching 'New' typography */}
      <div className="w-full p-6 sm:p-8 md:p-10 lg:p-12 border-b border-black">
        <div>
          <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-neutral-950">
            {title}
          </h2>
          <p className="text-xl sm:text-2xl font-normal text-neutral-950 mt-2">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, idx) => {
          // Precise 1px grid divider lines across breakpoints
          const isNotLastInRowDesktop = (idx + 1) % 3 !== 0;
          const isNotLastInRowTablet = (idx + 1) % 2 !== 0;
          const isFirstRowDesktop = idx < 3;
          const isFirstTwoRowsTablet = idx < 4;
          const isNotLastMobile = idx < products.length - 1;

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
    </section>
  );
}
