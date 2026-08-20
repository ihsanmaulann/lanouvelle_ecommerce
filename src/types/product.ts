export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  sizes: string[];
  imageSrc: string;
  badge?: string;
  status?: string;
  href?: string;
}
