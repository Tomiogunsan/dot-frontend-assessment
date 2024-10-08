import {
  DELETE_PRODUCT,
  GET_ALL_PRODUCT,
  GET_INDIVIDUAL_PRODUCT,
  UPDATE_PRODUCT,
} from "../config/apiUrl";
import api from "../config/http-common";
import { IGetProductsResponse } from "./interface/response/product";

export const getAllProduct = () => {
  return api.get<IGetProductsResponse>(GET_ALL_PRODUCT);
};

export const getIndividualProduct = (id: string) => {
  return api.get(GET_INDIVIDUAL_PRODUCT(id));
};

export const updateProduct = (id: string) => {
  return api.get(UPDATE_PRODUCT(id));
};

export const deleteProduct = (id: string) => {
  return api.get(DELETE_PRODUCT(id));
};
