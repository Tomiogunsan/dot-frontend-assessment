import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  GET_ALL_PRODUCT,
  GET_INDIVIDUAL_PRODUCT,
  UPDATE_PRODUCT,
} from "../config/apiUrl";
import api from "../config/http-common";
import { ICreateProductQuery } from "./interface/DTO/product";
import { ICreateProductResponse, IGetProductsResponse, IProducts } from "./interface/response/product";

export const getAllProduct = () => {
  return api.get<IGetProductsResponse>(GET_ALL_PRODUCT);
};

export const getIndividualProduct = (id: string) => {
  return api.get<IProducts>(GET_INDIVIDUAL_PRODUCT(id));
};

export const updateProduct = (id: string) => {
  return api.get(UPDATE_PRODUCT(id));
};

export const deleteProduct = (id: string) => {
  return api.get(DELETE_PRODUCT(id));
};

export const createProduct = (data: ICreateProductQuery) => {
  return api.post<ICreateProductResponse>(CREATE_PRODUCT, data);
};
