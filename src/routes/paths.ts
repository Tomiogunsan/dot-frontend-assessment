export default {
  product: () => "/products",
  productDetail: (id: string) => `/products/${id}`,
  pageNotFound: () => "/page-not-found",
};