import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ShopView from "@/components/shop/ShopView";
import {
  shopCategoriesInfo,
  catalogProducts,
  racingSeriesProducts,
} from "@/data/products";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  return [
    { category: "racing-series" },
    { category: "anime-series" },
    { category: "casual" },
    { category: "coming-soon" },
  ];
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category } = await params;
  const info = shopCategoriesInfo[category];

  if (!info) {
    return {
      title: "Shop - LaNouvelle",
    };
  }

  return {
    title: `${info.title} - LaNouvelle`,
    description: info.description,
  };
}

export default async function CategoryShopPage({ params }: PageProps) {
  const { category } = await params;
  const info = shopCategoriesInfo[category];

  if (!info) {
    notFound();
  }

  // Get products for category (or fallback to catalog products for demo)
  const products =
    category === "racing-series"
      ? catalogProducts
      : category === "coming-soon"
      ? racingSeriesProducts
      : catalogProducts;

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar logoSrc="/images/logo.png" />
      <main className="flex-1">
        <ShopView
          title={info.title}
          description={info.description}
          initialProducts={products}
        />
      </main>
      <Footer />
    </div>
  );
}
