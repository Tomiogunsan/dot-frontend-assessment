export type IGetProductsQuery = {
  page?: number;
  limit?: number;
  category?: string;
  subCategory?:string;
  minPrice?:number;
  maxPrice?:number;
  search?:string;
  sort?: string;
  order?:string
}

export type ICreateProductQuery = {
  name: string;
  price: number
  description: string,
  category: string,
  brand: string,
  stock: number,
  imageUrl?: string,
  subCategory: string,
};