/* eslint-disable @typescript-eslint/no-explicit-any */
import Products from "@pages/products";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { CartProvider } from "context";
import { useGetProducts } from "hooks/product/useGetProducts";

import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("hooks/product/useGetProducts");

const queryClient = new QueryClient();

describe("products", () => {
  beforeEach(() => {
    (useGetProducts as any).mockReturnValue({
      data: {
        totalProducts: 1,
        totalPages: 1,
        currentPage: 1,
        products: [
          {
            id: 1,
            name: "food",
            category: "food",
            subCategory: "food",
            price: 3,
            stock: 3,
            brand: "food",
            description: "food",
            imageUrl: "food",
            rating: 3,
            reviews: 3,
            specifications: {
              processor: "food",
              screenSize: "food",
              weight: "food",
              battery: "food",
            },
          },
        ],
      },
      productIsLoading: false,
    });
  });
  it("renders products", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <Products />
        </CartProvider>
      </QueryClientProvider>
    );
    expect(screen.getAllByText("E-Commerce")).toBeDefined();
  });

  it("renders correct products", async () => {
    (useGetProducts as any).mockReturnValue({
      data: {
        totalProducts: 1,
        totalPages: 1,
        currentPage: 1,
        products: [
          {
            id: 1,
            name: "food",
            category: "food",
            subCategory: "food",
            price: 3,
            stock: 3,
            brand: "food",
            description: "food",
            imageUrl: "food",
            rating: 3,
            reviews: 3,
            specifications: {
              processor: "food",
              screenSize: "food",
              weight: "food",
              battery: "food",
            },
          },
        ],
      },
      productIsLoading: false,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <Products />
        </CartProvider>
      </QueryClientProvider>
    );

    expect(screen.getAllByText("0")).toBeDefined();
    expect(screen.getAllByText("Filter")).toBeDefined();
    expect(screen.getAllByText("Add Product")).toBeDefined();
    expect(screen.getAllByText("All Products")).toBeDefined();
  });
});
