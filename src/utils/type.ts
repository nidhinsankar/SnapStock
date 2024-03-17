export interface Product {
  id: number;
  image: string;
  price: number;
  category: string;
  rating: {
    count: number;
    rate: number;
  };
  description: string;
  title: string;
}
