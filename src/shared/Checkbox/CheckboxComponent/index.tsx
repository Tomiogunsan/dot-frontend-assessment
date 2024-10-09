import { Checkbox as FlowbiteCheckbox, Flowbite } from "flowbite-react";
import { twMerge } from "tailwind-merge";
import { CustomFlowbiteTheme } from "flowbite-react";

import { ICheckboxComponentProps } from "../interface";

const checkBoxTheme: CustomFlowbiteTheme = {
  checkbox: {
    root: {
      base: "h-4 w-4 rounded border border-gray-300 bg-gray-100 focus:ring-2 focus:#0000FF dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-cyan-600 text-[#0000FF]",
    },
  },
};

const CheckboxComponent = ({
  name,
  value,
  onChange,
  checked,
  className,
  checkboxClassName,
  label,

  disabled,
}: ICheckboxComponentProps) => {
  return (
    <div
      className={twMerge("flex justify-between w-full items-center", className)}
    >
      {label && <label className="pb-[3px] text-[#333333]">{label}</label>}
      <Flowbite theme={{ theme: checkBoxTheme }}>
        <FlowbiteCheckbox
          disabled={disabled}
          name={name}
          value={value}
          className={twMerge(
            "bg-white w-[20px] h-[20px] cursor-pointer",
            disabled && "cursor-not-allowed",
            checkboxClassName
          )}
          onChange={(e) => onChange?.(e.target.checked)}
          checked={checked}
        />
      </Flowbite>
    </div>
  );
};

export default CheckboxComponent;
