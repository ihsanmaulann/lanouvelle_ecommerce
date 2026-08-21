import { Product } from "@/types/product";

export interface CategoryInfo {
  slug: string;
  title: string;
  description: string;
}

export const shopCategoriesInfo: Record<string, CategoryInfo> = {
  "racing-series": {
    slug: "racing-series",
    title: "Racing Series",
    description: "Semua product LaNouvelle Racing-Series ada disini",
  },
  "anime-series": {
    slug: "anime-series",
    title: "Anime Series",
    description: "Semua product LaNouvelle Anime-Series ada disini",
  },
  casual: {
    slug: "casual",
    title: "Casual",
    description: "Koleksi apparel santai sehari-hari dari LaNouvelle",
  },
  "coming-soon": {
    slug: "coming-soon",
    title: "Coming Soon",
    description: "Produk terbaru LaNouvelle yang akan segera hadir",
  },
  all: {
    slug: "all",
    title: "All Products",
    description: "Semua koleksi produk LaNouvelle ada disini",
  },
};

export const racingSeriesProducts: Product[] = [
  {
    id: "verstappen-kick-1",
    name: "Verstappen Kick",
    price: "Rp 180.000",
    description: "Racing-Series ,Cutting Boxy Fit ,Premium Cotton 20S ,DTF Sablon",
    sizes: ["M", "L", "XL"],
    imageSrc: "/images/product.png",
    category: "racing-series",
    badge: "Coming Soon",
    status: "Coming Soon",
    href: "/products/verstappen-kick-1",
  },
  {
    id: "verstappen-kick-2",
    name: "Verstappen Kick",
    price: "Rp 180.000",
    description: "Racing-Series ,Cutting Boxy Fit ,Premium Cotton 20S ,DTF Sablon",
    sizes: ["M", "L", "XL"],
    imageSrc: "/images/product.png",
    category: "racing-series",
    badge: "Coming Soon",
    status: "Coming Soon",
    href: "/products/verstappen-kick-2",
  },
];

export const catalogProducts: Product[] = [
  {
    id: "catalog-1",
    name: "Verstappen Kick",
    price: "Rp 180.000",
    description: "Racing-Series ,Cutting Boxy Fit ,Premium Cotton 20S ,DTF Sablon",
    sizes: ["M", "L", "XL"],
    imageSrc: "/images/product.png",
    category: "racing-series",
    status: "Shop Now",
    href: "/products/verstappen-kick",
  },
  {
    id: "catalog-2",
    name: "Verstappen Kick",
    price: "Rp 180.000",
    description: "Racing-Series ,Cutting Boxy Fit ,Premium Cotton 20S ,DTF Sablon",
    sizes: ["M", "L", "XL"],
    imageSrc: "/images/product.png",
    category: "racing-series",
    status: "Shop Now",
    href: "/products/verstappen-kick",
  },
  {
    id: "catalog-3",
    name: "Verstappen Kick",
    price: "Rp 180.000",
    description: "Racing-Series ,Cutting Boxy Fit ,Premium Cotton 20S ,DTF Sablon",
    sizes: ["M", "L", "XL"],
    imageSrc: "/images/product.png",
    category: "racing-series",
    status: "Shop Now",
    href: "/products/verstappen-kick",
  },
  {
    id: "catalog-4",
    name: "Verstappen Kick",
    price: "Rp 180.000",
    description: "Racing-Series ,Cutting Boxy Fit ,Premium Cotton 20S ,DTF Sablon",
    sizes: ["M", "L", "XL"],
    imageSrc: "/images/product.png",
    category: "racing-series",
    status: "Shop Now",
    href: "/products/verstappen-kick",
  },
  {
    id: "catalog-5",
    name: "Verstappen Kick",
    price: "Rp 180.000",
    description: "Racing-Series ,Cutting Boxy Fit ,Premium Cotton 20S ,DTF Sablon",
    sizes: ["M", "L", "XL"],
    imageSrc: "/images/product.png",
    category: "racing-series",
    status: "Shop Now",
    href: "/products/verstappen-kick",
  },
  {
    id: "catalog-6",
    name: "Verstappen Kick",
    price: "Rp 180.000",
    description: "Racing-Series ,Cutting Boxy Fit ,Premium Cotton 20S ,DTF Sablon",
    sizes: ["M", "L", "XL"],
    imageSrc: "/images/product.png",
    category: "racing-series",
    status: "Shop Now",
    href: "/products/verstappen-kick",
  },
];

export const defaultProductDetail: Product = {
  id: "verstappen-kick",
  name: "Verstappen Kick",
  price: "Rp 160.000",
  originalPrice: "Rp 210.000",
  description: "Racing-Series ,Cutting Boxy Fit ,Premium Cotton 20S ,DTF Sablon",
  sizes: ["M", "L", "XL"],
  imageSrc: "/images/product.png",
  images: [
    "/images/product.png",
    "/images/product.png",
    "/images/product.png",
  ],
  category: "racing-series",
  status: "Shop Now",
  href: "/products/verstappen-kick",
  sizingChart: [
    { size: "Medium", dimensions: "54cm x 66cm" },
    { size: "Large", dimensions: "56cm x 68cm" },
    { size: "Extra Large", dimensions: "60cm x 71cm" },
    { size: "Double Extra Large", dimensions: "63cm x 73cm" },
  ],
  tolerance: "[Toleransi 1-2 cm]",
  material: ["cotton combed 24s", "Sablon dtf Plastisol"],
  sections: [
    {
      title: "Ketentuan Umum",
      items: [
        "Dengan membeli, pembeli dianggap setuju dengan semua ketentuan",
        "Wajib menyertakan video unboxing dan foto sebagai bukti",
        "Tanpa bukti, komplain/retur tidak dapat diproses",
      ],
    },
    {
      title: "Cara Order",
      items: [
        "Barang dikirim sesuai rincian di sistem (bukan catatan/chat)",
        "Pastikan alamat dan nomor HP sudah benar",
        "Produk pre-order diproses 1-20 hari setelah pemesanan",
        "Produk ready stock dikirim di hari yang sama (sesuai jadwal pengiriman)",
      ],
    },
    {
      title: "Pembatalan Pesanan",
      items: [
        "Tidak menerima pembatalan dengan alasan apapun",
        "Mohon pastikan pesanan sudah benar sebelum checkout",
        "Disarankan untuk bertanya ke CS terlebih dahulu sebelum membeli",
      ],
    },
    {
      title: "Ketersediaan Barang",
      items: [
        "Jika varian bisa dipilih, berarti barang ready",
        "Jika stok kosong akan diinformasikan secepatnya",
      ],
    },
    {
      title: "Jadwal Pengiriman",
      items: [
        "Pengiriman setiap hari",
        "Senin-Sabtu: pesanan sebelum 14.00 WIB dikirim hari yang sama",
        "Minggu: pesanan sebelum 11.00 WIB dikirim hari yang sama",
        "Hari libur nasional: tidak ada pengiriman - Estimasi tiba tergantung ekspedisi",
      ],
    },
  ],
};

export function getProductById(id: string): Product {
  const found = catalogProducts.find((p) => p.id === id || p.href?.includes(id));
  if (found) {
    return {
      ...defaultProductDetail,
      ...found,
      price: found.price || defaultProductDetail.price,
      originalPrice: defaultProductDetail.originalPrice,
    };
  }
  return defaultProductDetail;
}
