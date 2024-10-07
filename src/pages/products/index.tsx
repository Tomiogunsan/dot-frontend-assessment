import { useState } from "react";
import Header from "../../components/Layout/Header";
import Button from "../../shared/Button";
import Card from "../../shared/Card";
import Search from "../../shared/Search";
import { RiFilter3Line } from "react-icons/ri";
import CreateProduct from "./components/CreateProduct";

const Products = () => {
    const [addProductModal, setAddProductModal] = useState(false);
  return (
    <>
      <Header>
        <div className="w-full px-6 py-4">
          {/* small screen  */}
          <div className="md:hidden sm:block grid gap-y-4">
            <Search />
            <div className="flex justify-between pb-6">
              <p className="flex items-center gap-[4px] text-red-800 text-lg font-semibold cursor-pointer">
                <RiFilter3Line size={20} />
                Filter{" "}
              </p>
              <Button className="bg-[#29337b] " onClick={() => setAddProductModal(true)}>Add Product</Button>
            </div>
          </div>
          <div className=" hidden md:flex items-center justify-between ">
            <p className="text-xl font-semibold ">All Products</p>
            <Button className="bg-[#29337b] " onClick={() => setAddProductModal(true)}>Add Product</Button>
          </div>
          {/* large screen search and filter */}
          <div className="hidden md:flex  md:flex-row md:justify-between py-6 ">
            <div className="  w-1/2 mb-0">
              <Search />
            </div>

            <p className="flex items-center gap-[4px] text-red-800 text-lg font-semibold cursor-pointer">
              <RiFilter3Line size={20} />
              Filter{" "}
            </p>
          </div>

          {/* cards */}
          <div className="grid  gap-4  md:grid-cols-2 lg:grid-cols-3 px-4">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </Header>

      {addProductModal && <CreateProduct onClose={() => setAddProductModal(false)}/>}
    </>
  );
};

export default Products;
