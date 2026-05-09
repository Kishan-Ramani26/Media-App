import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";
import GlassSurface from "./GlassSurface";

const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const query = text.trim();
    console.log("Search query:", query);
    dispatch(setQuery(query));
  };

  return (
    <div className="sticky w-full sm:w-[75%] rounded-[20px] mx-auto top-5 z-10 bg-black/60 px-4 sm:px-0">
      <GlassSurface
        width="100%"
        height="auto"
        borderRadius={20}
        backgroundOpacity={0.12}
        saturation={1.2}
        className="w-full"
      >
        <form
          className="w-full flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-6 py-4 items-stretch"
          onSubmit={submitHandler}
        >
          <input
            required
            type="text"
            name="search"
            aria-label="Search for media"
            placeholder="Search for media..."
            className="flex-1 w-full px-4 py-2 outline-none border-2 border-gray-300 rounded-[20px] focus:border-blue-500 transition-colors duration-300 text-sm"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type="submit"
            className="mt-2 sm:mt-0 bg-blue-500 active:scale-95 text-white px-6 py-2 text-sm sm:text-[1.1vw] rounded-[20px] sm:ml-2 w-full sm:w-auto cursor-pointer"
          >
            Search
          </button>
        </form>
      </GlassSurface>
    </div>
  );
};

export default SearchBar;
