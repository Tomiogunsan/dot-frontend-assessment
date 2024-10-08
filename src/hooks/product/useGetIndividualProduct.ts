import { useQuery } from "@tanstack/react-query";
import { getIndividualProduct } from "../../services/products.service";

export const useGetIndividualProduct = (id: string) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["get-individual-product"],
    queryFn: () => getIndividualProduct(id),
  });
  return {
    individualProduct: data?.data,
    individualProductIsLoading: isLoading,
    individualProductIsError: isError,
  };
};
