import { useQuery } from "@tanstack/react-query";
import { getAllProduct } from "../../services/products.service";
import { IGetProductsQuery } from "@services/interface/DTO/product";


export const useGetProducts = (queryParams: IGetProductsQuery) => {
  

  const { data, isLoading, isError } = useQuery({
    queryKey: ["get-products", queryParams],
    queryFn: () => getAllProduct(queryParams),
  });
  return {
    productData: data?.data,
    productIsLoading: isLoading,
    productIsError: isError,
  };
};
