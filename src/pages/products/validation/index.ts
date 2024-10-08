import * as yup from "yup";

export const createProductSchema = yup.object({
  name: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),
  category: yup.string().required("Category is required"),
  subCategory: yup.string().required("Sub Category is required"),
  price: yup.number().required("Price is required"),
  brand: yup.string().required("Brand is required"),
  imageUrl: yup.string(),
  stock: yup.number().required("Stock is required"),
});
