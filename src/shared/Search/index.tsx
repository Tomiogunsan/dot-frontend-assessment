import { IoIosSearch } from "react-icons/io";

type Props = {
  searchValue: string;
  setSearchValue: (value: string) => void;
};

const Search = ({ searchValue, setSearchValue }: Props) => {
  return (
    <div className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1 ">
      <input
        type="text"
        placeholder="Search..."
        className="flex-1 bg-transparent outline-none"
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        value={searchValue}
      />
      <button className="cursor-pointer text-[#aaa6a6]">
        <IoIosSearch />
      </button>
    </div>
  );
};

export default Search;
