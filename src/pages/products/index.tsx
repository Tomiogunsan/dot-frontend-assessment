import { useState } from "react";
import Header from "../../components/Layout/Header";
import Button from "../../shared/Button";
import Card from "../../shared/Card";
import Search from "../../shared/Search";
import { RiFilter3Line } from "react-icons/ri";
import CreateProduct from "./components/CreateProduct";
import { useGetProducts } from "../../hooks/product/useGetProducts";
import { Link } from "react-router-dom";
import Pagination from "shared/Pagination";
import { IGetProductsQuery } from "@services/interface/DTO/product";

const Products = () => {
  const [addProductModal, setAddProductModal] = useState(false);

  const [queryParams, setQueryParams] = useState<IGetProductsQuery>({
    page: 1,
    search: "",
    category: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const updateQueryParams = (params: Partial<IGetProductsQuery>) => {
    setQueryParams((prev) => ({ ...prev, ...params }));
  };
  const { productData } = useGetProducts(queryParams);
  console.log(queryParams);

  return (
    <>
      <Header>
        <div className="w-full px-6 py-4">
          {/* small screen  */}
          <div className="md:hidden sm:block grid gap-y-4">
            <Search
              searchValue={queryParams.search as string}
              setSearchValue={(value) => {
                console.log(value);
                if (queryParams.search !== value) {
                  updateQueryParams({
                    search: value,
                    page: 1,
                  });
                }
              }}
            />
            <div className="flex justify-between pb-6">
              <p className="flex items-center gap-[4px] text-red-800 text-lg font-semibold cursor-pointer">
                <RiFilter3Line size={20} />
                Filter{" "}
              </p>
              <Button
                className="bg-[#29337b] "
                onClick={() => setAddProductModal(true)}
              >
                Add Product
              </Button>
            </div>
          </div>
          <div className=" hidden md:flex items-center justify-between ">
            <p className="text-xl font-semibold ">All Products</p>
            <Button
              className="bg-[#29337b] "
              onClick={() => setAddProductModal(true)}
            >
              Add Product
            </Button>
          </div>
          {/* large screen search and filter */}
          <div className="hidden md:flex  md:flex-row md:justify-between py-6 ">
            <div className="  w-1/2 mb-0">
              <Search
                searchValue={queryParams.search as string}
                setSearchValue={(value) => {
                  console.log(value);
                  if (queryParams.search !== value) {
                    updateQueryParams({
                      search: value,
                      page: 1,
                    });
                  }
                }}
              />
            </div>

            <p className="flex items-center gap-[4px] text-red-800 text-lg font-semibold cursor-pointer">
              <RiFilter3Line size={20} />
              Filter{" "}
            </p>
          </div>

          {/* cards */}
          <div className="grid  gap-4  md:grid-cols-2 lg:grid-cols-3 px-4">
            {productData?.products?.map((product) => {
              return (
                <Link to={`/products/${product.id}`}>
                  <Card
                    description={product.description}
                    name={product.name}
                    imageUrl={product.imageUrl}
                    price={product.price}
                    rating={product.rating}
                    reviews={product.reviews}
                  />
                </Link>
              );
            })}
          </div>
        </div>

        <Pagination
          onChangeOfPage={() => {}}
          currentPage={productData?.currentPage as number}
          lengthOfData={productData?.totalPages as number}
        />
      </Header>

      {addProductModal && (
        <CreateProduct onClose={() => setAddProductModal(false)} />
      )}
    </>
  );
};

export default Products;
