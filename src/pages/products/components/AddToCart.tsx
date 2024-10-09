import { useCart } from "context";
import Drawer from "../../../shared/Drawer";

const AddToCart = ({ onClose }: { onClose: () => void }) => {
  const { cart, addToCart, removeFromCart, decreaseItemInCart } = useCart();
  return (
    <Drawer
      onClose={onClose}
      header="Shopping Cart"
      subHeader={`You have ${cart.length} items in your cart`}
    >
      <div className="grid gap-y-8">
        {cart.map((item) => {
          return (
            <div className="flex justify-between">
              <div className="flex gap-4">
                <div className="w-[50px] h-[50px] bg-slate-300" />
                <div className="flex flex-col gap-[4px]">
                  <p className="text-lg font-semibold">{item.name}</p>
                  <p className="text-gray-500 text-sm">${item.price} each</p>
                </div>
              </div>

              <div className="flex gap-2 items-center cursor-pointer">
                <p
                  className="border-[1px] shadow-md p-2 text-lg font-semibold"
                  onClick={() => decreaseItemInCart(item.id)}
                >
                  -
                </p>
                <p className="border-[1px] shadow-md p-2 text-lg font-semibold">
                  {item.quantity}
                </p>
                <p
                  className="border-[1px] shadow-md p-2 text-lg font-semibold"
                  onClick={() => addToCart(item)}
                >
                  +
                </p>
                <p
                  className="border-[1px] shadow-md p-2 text-lg font-semibold"
                  onClick={() => removeFromCart(item.id)}
                >
                  x
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Drawer>
  );
};

export default AddToCart;
