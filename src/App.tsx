import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import paths from "./routes/paths";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import Loader from "./shared/Loader";
import { CartProvider } from "context";
import Products from "@pages/products";
import ProductDetails from "@pages/products/components/ProductDetails";
import PageNotFound from "@pages/PageNotFound";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 0,
      },
    },
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to={paths.product()} replace />,
    },
    {
      path: paths.product(),
      element: <Products />,
    },
    {
      path: paths.productDetail(":id"),
      element: <ProductDetails />,
    },
    { path: paths.pageNotFound(), element: <PageNotFound /> },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Suspense fallback={<Loader />}>
          <RouterProvider router={router} />
          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            containerClassName="!z-[999999999999]"
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
              },
            }}
          />
        </Suspense>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
