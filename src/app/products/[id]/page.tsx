import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import RelatedProducts from "@/components/product/RelatedProducts";
import {
  getProductById,
  catalogProducts,
  racingSeriesProducts,
} from "@/data/products";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  const allIds = [
    "verstappen-kick",
    "verstappen-kick-1",
    "verstappen-kick-2",
    "catalog-1",
    "catalog-2",
    "catalog-3",
    "catalog-4",
    "catalog-5",
    "catalog-6",
  ];

  return allIds.map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);

  return {
    title: `${product.name} - LaNouvelle`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = getProductById(id);

  // Gallery images (fallback to product imageSrc)
  const images = product.images || [
    product.imageSrc,
    product.imageSrc,
    product.imageSrc,
  ];

  // Related products for the 3-column bottom grid
  const related = catalogProducts.slice(0, 3);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* Top Navbar */}
      <Navbar logoSrc="/images/logo.png" />

      <main className="flex-1 flex flex-col">
        {/* Main Product Split: Gallery & Info */}
        <section className="w-full bg-white border-b border-black">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-black">
            {/* Left Column: Product Gallery */}
            <div className="w-full">
              <ProductGallery images={images} productName={product.name} />
            </div>

            {/* Right Column: Product Info, Sizing, Rules & Cart Action */}
            <div className="w-full">
              <ProductInfo product={product} />
            </div>
          </div>
        </section>

        {/* Related Products Grid (3 Columns) */}
        <RelatedProducts products={related} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
