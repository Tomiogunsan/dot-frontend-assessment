import { useDeleteProduct } from "hooks/product/useDeleteProduct";
import Modal from "../../../shared/Modal";
import { useNavigate, useParams } from "react-router-dom";

const DeleteProduct = ({ onClose }: { onClose: () => void }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { deleteProduct, deleteProductIsPending } = useDeleteProduct();
  const handleDelete = () => {
    deleteProduct(id as string);
   
    onClose()
 navigate("/products");
  };
  return (
    <Modal
      onClose={onClose}
      header="Delete Product"
      action={{
        color: "error",
        onClick: handleDelete,
        loading: deleteProductIsPending,
      }}
    >
      <p>Are you sure you want to delete this product?</p>
    </Modal>
  );
};

export default DeleteProduct;
