import { useMutation } from "@tanstack/react-query";

import { createProduct } from "../../services/products.service";

export const useCreateProduct = () => {
  const { mutate, isError, isPending } = useMutation({
    mutationFn: createProduct,
  });
  return {
    createProduct: mutate,
    createProductIsPending: isPending,
    createProductIsError: isError,
  };
};
