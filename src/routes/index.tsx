import PageNotFound from "../pages/PageNotFound";
import Products from "../pages/products";
import ProductDetails from "../pages/products/components/ProductDetails";
import paths from "./paths";

const routes = [
  {
    path: paths.product(),
    element: Products,
  },
  {
    path: paths.productDetail(":id"),
    element: ProductDetails,
  },
  { path: paths.pageNotFound(), element: PageNotFound },
];


export default routes