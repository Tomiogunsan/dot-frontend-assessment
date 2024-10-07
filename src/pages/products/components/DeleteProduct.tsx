import Modal from "../../../shared/Modal"


const DeleteProduct = ({onClose} : {onClose: () => void}) => {
  return (
    <Modal onClose={onClose} header="Delete Product" action={{color: "error"}}>
      <p>Are you sure you want to delete this product?</p>
    </Modal>
  )
}

export default DeleteProduct