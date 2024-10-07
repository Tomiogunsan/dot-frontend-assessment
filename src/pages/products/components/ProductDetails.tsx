import Header from "../../../components/Layout/Header";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import Button from "../../../shared/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import EditProduct from "./EditProduct";
import DeleteProduct from "./DeleteProduct";
import AddToCart from "./AddToCart";

const ProductDetails = () => {
  const [editProductModal, setEditProductModal] = useState(false);
  const [deleteProductModal, setDeleteProductModal] = useState(false);
  const [addToCart, setAddToCart] = useState(false);
  return (
    <Header>
      <div className="p-8">
        <h1 className="text-xl font-semibold">Product Details</h1>
        <div className="bg-[#fff] p-6 mt-2">
          <Link to="/products" className="flex items-center gap-2 pb-4">
            {" "}
            <MdOutlineKeyboardBackspace /> Back to Products
          </Link>
          <div className="grid grid-cols-3">
            <div className="bg-red-600 h-[400px]">a</div>
            <div className="col-span-2 pl-6 pt-14 flex  flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold">Product Name</h3>
                <p className="text-sm text-[#bcb9b9] font-semibold pt-2 pb-6">
                  description
                </p>
                <p className="text-2xl font-bold">price</p>
              </div>
              <div className="flex gap-4">
                <Button className="bg-[#29337b]" onClick={() => setAddToCart(true)}>Add to Cart</Button>
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
