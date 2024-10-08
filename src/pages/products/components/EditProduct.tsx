import { useForm } from "react-hook-form";
import ControlledInput from "../../../shared/Input/ControlledInput";
import Modal from "../../../shared/Modal";
import Button from "../../../shared/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { createProductSchema } from "../validation";
import { IProducts } from "@services/interface/response/product";
import { ICreateProductQuery } from "@services/interface/DTO/product";
import {
 
  useUpdateProduct,
} from "hooks/product/useUpdateProduct";
import { useParams } from "react-router-dom";

import CircularProgress from "shared/CircularProgress";
import { QueryClient } from "@tanstack/react-query";

type Props = {
  individualProduct: IProducts | undefined;
  onClose: () => void;
};

const EditProduct = ({ onClose, individualProduct }: Props) => {
  const { id } = useParams();
  const { editProduct, editProductIsPending } = useUpdateProduct();
  const queryClient = new QueryClient();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: individualProduct?.name,
      price: individualProduct?.price,
      description: individualProduct?.description,
      category: individualProduct?.category,
      brand: individualProduct?.brand,
      stock: individualProduct?.stock,
      imageUrl: individualProduct?.imageUrl,
      subCategory: individualProduct?.subCategory,
    },
    resolver: yupResolver(createProductSchema),
  });

  const productId = id as string;
  const handleEditProduct = async (data: ICreateProductQuery) => {
    const res = await editProduct({ id: productId, data });
    console.log(res?.status);

    if (res.status === 200) {
      await queryClient.invalidateQueries({
        queryKey: ["get-products"],
      });
    }
    onClose();
  };

  return (
    <Modal onClose={onClose} action={{ show: false }} header="Edit Product">
      <form onSubmit={handleSubmit(handleEditProduct)}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <ControlledInput control={control} name="name" label="Name" />
            <ControlledInput
              control={control}
              name="category"
              label="Category"
            />
            <ControlledInput control={control} name="price" label="Price" />
            <ControlledInput
              control={control}
              name="description"
              label="Description"
            />
          </div>
          <div>
            <ControlledInput control={control} name="brand" label="Brand" />

            <ControlledInput
              control={control}
              name="subCategory"
              label="Sub Category"
            />
            <ControlledInput control={control} name="stock" label="Stock" />
            <ControlledInput
              control={control}
              name="imageUrl"
              label="Image URL"
            />
          </div>
        </div>
        <div className="w-full pt-6">
          <Button className="bg-[#29337b] w-full" type="submit">
            {editProductIsPending ? <CircularProgress /> : "Save Changes"}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default EditProduct;
