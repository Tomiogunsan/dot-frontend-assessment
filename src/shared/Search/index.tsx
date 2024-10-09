import { useDebouncedValue } from "hooks/useDebounce";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";


type Props = {
  searchValue: string;
  setSearchValue: (value: string) => void;
};
const Search = ({ searchValue, setSearchValue }: Props) => {
  const [localValue, setLocalValue] = useState(searchValue);
  const debouncedValue = useDebouncedValue(localValue, 200);

  useEffect(() => {
    setSearchValue(debouncedValue);
  }, [debouncedValue, setSearchValue]);

  return (
    <div className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1 ">
      <input
        type="text"
        placeholder="Search by categories..."
        className="flex-1 bg-transparent outline-none"
        onChange={(e) => {
          // console.log(e.target.value)
          setLocalValue(e.target.value);
        }}
        value={localValue}
      />
      <button className="cursor-pointer text-[#aaa6a6]">
        <IoIosSearch />
      </button>
    </div>
  );
};

export default Search;
