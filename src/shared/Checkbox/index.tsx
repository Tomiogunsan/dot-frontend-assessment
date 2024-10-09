import { ICheckboxProps } from "./interface";
import { twMerge } from "tailwind-merge";

import CheckboxBase from "./CheckboxBase";

const Checkbox = ({
  label,
  labelContainerClassName,
  
  labelEndAdornment,
  checkboxBaseClassName,
  className,
  optionClassName,
  optionLabelClassName,
  ...checkboxProps
}: ICheckboxProps) => {
  return (
    <div className={className}>
      <div
        className={twMerge(
          "flex justify-between w-full",
          labelContainerClassName
        )}
      >
        {label && <label className="pb-[3px] text-[#333333]">{label}</label>}
        {labelEndAdornment && labelEndAdornment}
      </div>
      <CheckboxBase
        {...checkboxProps}
        className={twMerge(
          "w-full flex flex-wrap -mt-2",
          checkboxBaseClassName
        )}
        optionClassName={twMerge(
          "flex w-max flex-row-reverse mr-8 mt-2 last:mr-0",
          optionClassName
        )}
        optionLabelClassName={twMerge("ml-2", optionLabelClassName)}
      />
    </div>
  );
};

export default Checkbox;
