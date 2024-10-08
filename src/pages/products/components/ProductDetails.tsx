import Header from "../../../components/Layout/Header";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import Button from "../../../shared/Button";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import EditProduct from "./EditProduct";
import DeleteProduct from "./DeleteProduct";
import AddToCart from "./AddToCart";
import { useGetIndividualProduct } from "../../../hooks/product/useGetIndividualProduct";
import { MdOutlineStarPurple500 } from "react-icons/md";

const ProductDetails = () => {
  const { id } = useParams();
  const [editProductModal, setEditProductModal] = useState(false);
  const [deleteProductModal, setDeleteProductModal] = useState(false);
  const [addToCart, setAddToCart] = useState(false);
  const { individualProduct } = useGetIndividualProduct(id as string);

  

  return (
    <Header>
      <div className="p-8">
        <h1 className="text-xl font-semibold">Product Details</h1>
        <div className="bg-[#fff] p-4 mt-2 md:p-6">
          <Link to="/products" className="flex items-center gap-2 pb-4">
            {" "}
            <MdOutlineKeyboardBackspace /> Back to Products
          </Link>
         
          <div className="grid lg:grid-cols-3 w-full">
            <div>
              <div className=" w-full h-max overflow-hidden">
                <img
                  src={individualProduct?.imageUrl}
                  alt="/"
                  className="object-cover rounded-md w-full h-full"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://content.hostgator.com/img/weebly_image_sample.png";
                  }}
                />
              </div>
            </div>
            <div className="lg:col-span-2 pt-8 flex  flex-col lg:justify-between lg:pl-6  lg:pt-0">
              <div>
                <h3 className="text-xl font-semibold">
                  {individualProduct?.name}
                </h3>
                <p className="text-sm text-gray-400  pt-2 pb-6">
                  {individualProduct?.description}
                </p>
                <p className="text-2xl font-bold">
                  ${individualProduct?.price}
                </p>
                <div className="flex gap-2 items-center ">
                  <span className="flex gap-[3px] items-center">
                    {" "}
                    <MdOutlineStarPurple500 className="text-yellow-500" />{" "}
                    {individualProduct?.rating}
                  </span>
                  <span className="text-gray-500 text-sm">
                    ({individualProduct?.reviews} reviews)
                  </span>
                </div>

                <div className="grid gap-y-2">
                  <h3 className="text-xl font-semibold pt-6 pb-2">
                    Specifications:
                  </h3>
                  <p>
                    Processor:{" "}
                    {individualProduct?.specifications?.processor || "--"}
                  </p>
                  <p>
                    Screen size:{" "}
                    {individualProduct?.specifications?.screenSize || "--"}
                  </p>
                  <p>
                    Weight: {individualProduct?.specifications?.weight || "--"}
                  </p>
                  <p>
                    Battery:{" "}
                    {individualProduct?.specifications?.battery || "--"}
                  </p>
                </div>
              </div>
              <div className="flex  flex-col gap-4 mt-4 md:flex-row">
                <Button
                  className="bg-[#29337b]"
                  onClick={() => setAddToCart(true)}
                >
                  Add to Cart
                </Button>
                <Button onClick={() => setEditProductModal(true)}>
                  Edit Product
                </Button>
                <Button
                  className="bg-red-500"
                  onClick={() => setDeleteProductModal(true)}
                >
                  Delete Product
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {editProductModal && (
        <EditProduct onClose={() => setEditProductModal(false)} />
      )}
      {deleteProductModal && (
        <DeleteProduct onClose={() => setDeleteProductModal(false)} />
      )}
      {addToCart && <AddToCart onClose={() => setAddToCart(false)} />}
    </Header>
  );
};

export default ProductDetails;
