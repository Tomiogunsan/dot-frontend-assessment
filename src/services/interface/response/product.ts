export type IProducts = {
  id: number;
  name: string;
  category: string;
  subCategory: string;
  price: number;
  stock: number;
  brand: string;
  description: string;
  imageUrl: string;
  rating: number;
  reviews: number;
  specifications: {
    processor: string;
    screenSize: string;
    weight: string;
    battery: string;
  };
};

export type IGetProductsResponse = {
  totalProducts: number;
  totalPages: number;
  currentPage: number;
  products: IProducts[];
};

export type ICreateProductResponse = {
  id: number;
  stock: number;
  imageUrl: string;
  brand: string;
  price: number;
  subCategory: string;
  category: string;
  description: string;
  name: string;
  rating: number;
  reviews: number;
};
