import Header from "../../../components/Layout/Header";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import Button from "../../../shared/Button";
import { Link } from "react-router-dom";

const ProductDetails = () => {
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
              <div className='flex gap-4'>
                <Button className='bg-[#29337b]'>Add to Cart</Button>
                <Button>Edit Product</Button>
                <Button className='bg-red-500'>Delete Product</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default ProductDetails;
