import Drawer from "../../../shared/Drawer";

const AddToCart = ({ onClose }: { onClose: () => void }) => {
  return (
    <Drawer
      onClose={onClose}
      header="Shopping Cart"
      subHeader="You have 5 items in your cart"
    >
      AddToCart
    </Drawer>
  );
};

export default AddToCart;
