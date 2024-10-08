import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { useCreateProduct } from "hooks/product/useCreateProduct";
import { toastAlert } from "@utils/toastConfig";
import { CircularProgress } from "@mui/material";
import Button from "shared/Button";
import { createProductSchema } from "../validation";
import { ICreateProductQuery } from "@services/interface/DTO/product";
import Modal from "shared/Modal";
import ControlledInput from "shared/Input/ControlledInput";

const CreateProduct = ({ onClose }: { onClose: () => void }) => {
  const { createProduct, createProductIsPending } = useCreateProduct();
  const { control, handleSubmit } = useForm<ICreateProductQuery>({
    defaultValues: {
      name: "",
      price: 0,
      description: "",
      category: "",
      brand: "",
      stock: 0,
      imageUrl: "",
      subCategory: "",
    },
    resolver: yupResolver(createProductSchema),
  });

  const handleCreateProduct = async (data: ICreateProductQuery) => {
    try {
      await createProduct(data);
      onClose();
      toastAlert.success("Product Created Successfully");
    } catch (error) {
      console.log(error);
      toastAlert.error("Something went wrong");
    }
  };

  return (
    <Modal
      onClose={onClose}
      action={{ show: false }}
      header="Create New Product"
    >
      <form onSubmit={handleSubmit(handleCreateProduct)}>
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
            {createProductIsPending ? <CircularProgress /> : "Create"}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default CreateProduct;
