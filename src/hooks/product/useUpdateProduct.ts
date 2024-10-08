import { ICreateProductQuery } from "@services/interface/DTO/product";
import { updateProduct } from "@services/products.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toastAlert } from "@utils/toastConfig";

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: ({ id, data }: { id: string; data: ICreateProductQuery }) =>
      updateProduct({ id, data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-products"] });
      toastAlert.success("Product Updated Successfully");
    },
    onError: () => {
      toastAlert.error("Something went wrong");
      
    },
  });

  return {
    editProduct: mutateAsync,
    editProductIsPending: isPending,
  };
};
