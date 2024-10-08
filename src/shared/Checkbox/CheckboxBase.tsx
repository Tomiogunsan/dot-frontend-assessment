import { useEffect, useState } from 'react';
import { isEqual } from 'lodash';
import { ICheckboxOption, ICheckboxProps } from './interface';
import FieldHelperText from 'shared/FieldHelperText';
import CheckboxComponent from './CheckboxComponent';


const CheckboxBase = ({
  name,
  className,
  options,
  value,
  onChange,
  optionClassName,
  optionLabelClassName,
  error,
  helperText,
 
}: ICheckboxProps) => {
  const [selectedValues, setSelectedValues] = useState<string[]>(value ?? []);

  useEffect(() => {
    if (value && !isEqual(value, selectedValues)) {
      setSelectedValues(value ?? []);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const onCheckChange = (option: ICheckboxOption, checked: boolean) => {
    let newSelectedValues = [...selectedValues];
    if (checked) {
      if (!selectedValues.includes(option.value as string)) {
        newSelectedValues = [...selectedValues, option.value as string];
      }
    } else {
      if (selectedValues.includes(option.value as string)) {
        newSelectedValues = selectedValues.filter(
          item => item !== option.value,
        );
      }
    }
    setSelectedValues(newSelectedValues);
    if (onChange) {
      onChange(newSelectedValues);
    }
  };

  return (
    <>
      <div className={`${className}`}>
        {options.map(option => {
          return (
            <CheckboxComponent
              key={option.value as string}
              name={name}
              className={optionClassName}
              label={option.label}
              labelClassName={optionLabelClassName}
              value={option?.value as string}
              onChange={checked => {
                onCheckChange(option, checked);
              }}
              checked={selectedValues?.includes(option?.value as string)}
            />
          );
        })}
        
      </div>
      <FieldHelperText error={error} helperText={helperText} />
    </>
  );
};

export default CheckboxBase;
