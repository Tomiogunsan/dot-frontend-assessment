import { useForm } from "react-hook-form";
import ControlledInput from "../../../shared/Input/ControlledInput";
import Modal from "../../../shared/Modal"
import Button from "../../../shared/Button";


const EditProduct = ({onClose}: {onClose: () => void}) => {
    const {control} = useForm()
  return (
    <Modal onClose={onClose} action={{ show: false }} header="Edit Product">
      <form>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <ControlledInput control={control} name="name" label="Name" />
            <ControlledInput
              control={control}
              name="category"
              label="Category"
            />
            <ControlledInput control={control} name="price" label="Price" />
            <ControlledInput
              control={control}
              name="description"
              label="Description"
            />
          </div>
          <div>
            <ControlledInput control={control} name="brand" label="Brand" />

            <ControlledInput
              control={control}
              name="subcategory"
              label="Sub Category"
            />
            <ControlledInput control={control} name="stock" label="Stock" />
            <ControlledInput control={control} name="image" label="Image URL" />
          </div>
        </div>
        <div className="w-full pt-6">
          <Button className="bg-[#29337b] w-full">Save Changes</Button>
        </div>
      </form>
    </Modal>
  );
}

export default EditProduct
