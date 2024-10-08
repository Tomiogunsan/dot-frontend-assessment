import {  useMutation } from "@tanstack/react-query";

import { createProduct } from "../../services/products.service";


export const useCreateProduct = () => {
  
  const { mutateAsync, isError, isPending } = useMutation({
    mutationFn: createProduct,
  });
  return {
    createProduct: mutateAsync,
    createProductIsPending: isPending,
    createProductIsError: isError,
  };
};
