import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  GET_ALL_PRODUCT,
  GET_INDIVIDUAL_PRODUCT,
  UPDATE_PRODUCT,
} from "../config/apiUrl";
import api from "../config/http-common";
import { ICreateProductQuery } from "./interface/DTO/product";
import {
  ICreateProductResponse,
  IGetProductsResponse,
  IProducts,
} from "./interface/response/product";

export const getAllProduct = () => {
  return api.get<IGetProductsResponse>(GET_ALL_PRODUCT);
};

export const getIndividualProduct = (id: string) => {
  return api.get<IProducts>(GET_INDIVIDUAL_PRODUCT(id));
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateProduct = ({ id, data }: { id: string; data: any }) => {
  return api.patch(UPDATE_PRODUCT(id), data);
};

export const deleteProduct = (id: string) => {
  return api.delete(DELETE_PRODUCT(id));
};

export const createProduct = (data: ICreateProductQuery) => {
  return api.post<ICreateProductResponse>(CREATE_PRODUCT, data);
};
