import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ShopView from "@/components/shop/ShopView";
import { catalogProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Shop All - LaNouvelle",
  description: "Semua koleksi apparel LaNouvelle",
};

export default function ShopAllPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar logoSrc="/images/logo.png" />
      <main className="flex-1">
        <ShopView
          title="All Products"
          description="Semua koleksi produk LaNouvelle ada disini"
          initialProducts={catalogProducts}
        />
      </main>
      <Footer />
    </div>
  );
}
