import React from "react";
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

interface ProductCatalogProps {
  products: Product[];
}

export default function ProductCatalog({ products }: ProductCatalogProps) {
  return (
    <section className="w-full bg-white border-b border-black">
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
