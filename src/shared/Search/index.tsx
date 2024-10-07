import { IoIosSearch } from "react-icons/io";

const Search = () => {
  return (
    <form className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1 ">
      <input
        type="text"
        name="name"
        placeholder="Search by categories..."
        className="flex-1 bg-transparent outline-none"
        // value={searchQuery}
        // onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="cursor-pointer text-[#aaa6a6]">
        <IoIosSearch  />
      </button>
    </form>
  );
};

export default Search;
