import React from "react";
import { Product } from "@/types/product";
import ProductCard from "@/components/home/ProductCard";

interface RelatedProductsProps {
  products: Product[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  if (!products || products.length === 0) return null;

  return (
    <section className="w-full bg-white border-b border-black">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.slice(0, 3).map((product, idx) => {
          const isNotLastInRowDesktop = (idx + 1) % 3 !== 0;
          const isNotLastInRowTablet = (idx + 1) % 2 !== 0;
          const isNotLastMobile = idx < products.length - 1;

          return (
            <div
              key={product.id || idx}
              className={`border-black ${
                isNotLastInRowDesktop ? "lg:border-r" : ""
              } ${
                isNotLastInRowTablet ? "sm:max-lg:border-r" : ""
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
