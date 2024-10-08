import { deleteProduct } from "@services/products.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toastAlert } from "@utils/toastConfig";

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (id: string) => deleteProduct(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-products"] });
      toastAlert.success("Product Deleted Successfully");
    },
    onError: () => {
      toastAlert.error("Something went wrong");
    },
  });
  return {
    deleteProduct: mutateAsync,
    deleteProductIsPending: isPending,
  };
};
