

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