import Button from "shared/Button";
import Select from "shared/Select";
import { IPagination } from "./interface";

const Pagination = ({ pageSize, currentPage, onChangeOfPage, lengthOfData }: IPagination) => {
  return (
    <div className="flex  justify-between px-6 items-center ">
      <div className="flex items-center gap-[9px] md:gap-8 pt-6">
        <Button className="bg-[#9294a4]">Previous</Button>
        <span>
          {" "}
          Page {currentPage} of {lengthOfData}
        </span>
        <Button className="bg-[#9294a4] px-4">Next</Button>
      </div>
      <div className=" hidden md:flex items-center">
        <Select
          value={pageSize}
          options={[
            {
              label: "10 per page",
              value: 10,
            },
            {
              label: "20 per page",
              value: 20,
            },
            {
              label: "30 per page",
              value: 30,
            },
            {
              label: "50 per page",
              value: 50,
            },
          ]}
          onChange={(value) => {
            onChangeOfPage(currentPage, value as number);
          }}
          className="bg-white"
        />
        {/* <div className="whitespace-nowrap text-sm ml-2">Rows per page</div> */}
      </div>
    </div>
  );
};

export default Pagination;
