import React from "react";

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#f5f5f5]">
      <div className="w-full px-10">
        <div className="w-full flex justify-between  py-8">
          <p className="text-2xl font-bold">E-Commerce</p>
          <p>Cart</p>
        </div>
        <div className="bg-[#dfdddd]">{children}</div>
      </div>
    </div>
  );
};

export default Header;
