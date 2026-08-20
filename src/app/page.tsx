import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import FeaturedSeries from "@/components/home/FeaturedSeries";
import ProductCatalog from "@/components/home/ProductCatalog";
import EverydaySection from "@/components/home/EverydaySection";
import Footer from "@/components/layout/Footer";
import { racingSeriesProducts, catalogProducts } from "@/data/products";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* Header / Navbar */}
      <Navbar logoSrc="/images/logo.png" />

      <main className="flex-1 flex flex-col">
        {/* Part 1: Hero Section */}
        <HeroSection
          title="LaNouvelle"
          description="Lorem ipsum dolor sit amet consectetur. Urna luctus consectetur imperdiet blandit."
          buttonText="Shop"
          buttonLink="/shop"
          imageSrc="/images/hero.jpg"
        />

        {/* Part 2: New Racing Series Section */}
        <FeaturedSeries
          title="New"
          subtitle="Racing Series"
          buttonText="Shop Now"
          buttonLink="/shop/racing-series"
          products={racingSeriesProducts}
        />

        {/* Part 3: Product Catalog Grid */}
        <ProductCatalog
          title="All Products"
          subtitle="Product Terlaris"
          products={catalogProducts}
        />

        {/* Part 4: Everyday Feature Section */}
        <EverydaySection
          title="Made for Your Everyday"
          description="Designed for comfort and made to fit your everyday style. Discover pieces that are easy to wear and made to stand out."
          buttonText="Explore Collection"
          buttonLink="/collections/everyday"
          imageSrc="/images/hero.jpg"
        />
      </main>

      {/* Part 4: Footer */}
      <Footer
        brandName="LaNouvelle"
        tagline="Lorem ipsum dolor sit amet consectetur. Suscipit pharetra proin volutpat id tortor odio posuere."
      />
    </div>
  );
}
