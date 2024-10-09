import {  useMutation, useQueryClient } from "@tanstack/react-query";

import { createProduct } from "../../services/products.service";
import { toastAlert } from "@utils/toastConfig";


export const useCreateProduct = () => {
   const queryClient = useQueryClient();
  const { mutateAsync, isError, isPending } = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-products"] });
      toastAlert.success("Product Created Successfully");
    },
    onError: () => {
      toastAlert.error("Something went wrong");
    },
  });
  return {
    createProduct: mutateAsync,
    createProductIsPending: isPending,
    createProductIsError: isError,
  };
};
