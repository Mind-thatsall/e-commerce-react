import React from "react";
import { closeSearch } from "@/utils/animations";

const SearchBar = ({ inputRef, bgModalRef }) => {
  return (
    <>
      <form
        ref={inputRef}
        action=""
        className="opacity-0 absolute z-[10] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <input
          className="px-[15px] py-[10px] w-[300px] md:w-[400px] text-[#222421] bg-[#9F948B] border-2 border-[#222421] focus:border-4 focus-visible:outline-none transition-all placeholder:text-[#222421]/80"
          type="text"
          name=""
          placeholder="Black hoodie..."
        />
      </form>
      <span
        ref={bgModalRef}
        onClick={() => closeSearch(inputRef.current, bgModalRef.current)}
        className="opacity-0 absolute w-full h-full bg-[#22242180] pointer-events-none z-[9]"
      ></span>
    </>
  );
};

export default SearchBar;
