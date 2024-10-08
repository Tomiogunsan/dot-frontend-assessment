import { useQuery } from "@tanstack/react-query";
import { getAllProduct } from "../../services/products.service";

export const useGetProducts = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["get-products"],
    queryFn: getAllProduct,
  });
  return {
    productData: data?.data,
    productIsLoading: isLoading,
    productIsError: isError,
  };
};
