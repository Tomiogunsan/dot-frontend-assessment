import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import routes from "./routes";
import paths from "./routes/paths";
import {
  Navigate,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import Loader from "./shared/Loader";
import { CartProvider } from "context";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 0,
      },
    },
  });

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path={"/*"}
          element={
            <Routes>
              {routes.map(({ path, element: Element }) => (
                <Route
                  key={path as string}
                  path={path as string}
                  element={<Element />}
                />
              ))}
              <Route
                path="*"
                element={<Navigate to={paths.pageNotFound()} replace />}
              />
            </Routes>
          }
        />
      </>
    )
  );

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
