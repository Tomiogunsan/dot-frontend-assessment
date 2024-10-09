import { categoryFilterOptions } from "enums";
import { IProductFilterFormFields } from "../validation/interface";
import { UseFormReturn } from "react-hook-form";
import FilterCheckbox from "shared/Filter/FilterCheckbox";
import FilterModal from "shared/Modal/FilterModal";

type Props = {
  onClose: () => void;
  onSubmit: (_data: IProductFilterFormFields) => void;
  form: UseFormReturn<IProductFilterFormFields>;
};

const ProductFilterModal = ({ onClose, onSubmit, form }: Props) => {
  const {control} = form
  return (
    <FilterModal
      onClose={onClose}
      form={form}
      action={{ onClick: () => onSubmit(form.getValues()) }}
    >
      <FilterCheckbox
        name="category"
        label="Category"
        control={control}
        options={categoryFilterOptions}
      />
    </FilterModal>
  );
};

export default ProductFilterModal;
