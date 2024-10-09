
import AddToCart from "@pages/products/components/AddToCart";
import { useCart } from "context";

import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";

const Header = ({
  children,

}: {
  children: React.ReactNode;
 
}) => {
 const [showCartDrawer, setShowCartDrawer] = useState(false)
 const {cart} = useCart()
 console.log(cart.length)
  return (
    <div className="bg-[#f5f5f5]">
      <div className="w-full  px-4 md:px-10">
        <div className="w-full flex justify-between  py-8">
          <p className="text-2xl font-bold">E-Commerce</p>
          <div className="flex gap-2" onClick={() => setShowCartDrawer(true)}>
            <p className="text-2xl bg-black text-[#fff] rounded-full w-8 h-8 text-center absolute top-[10px] right-[22px]">
              {cart.length}
            </p>
            <FaCartShopping size={30} className="relative" />
          </div>
        </div>
        <div className="bg-[#dfdddd] py-14">{children}</div>
      </div>
      {showCartDrawer && <AddToCart onClose={() => setShowCartDrawer(false)} />}
    </div>
  );
};

export default Header;
