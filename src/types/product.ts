export interface ProductDetailSection {
  title: string;
  items?: string[];
  text?: string;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  sizes: string[];
  imageSrc: string;
  images?: string[];
  category?: string;
  badge?: string;
  status?: string;
  href?: string;
  sizingChart?: { size: string; dimensions: string }[];
  tolerance?: string;
  material?: string[];
  sections?: ProductDetailSection[];
}


