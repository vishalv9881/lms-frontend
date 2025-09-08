import { useState } from "react";
import { assets } from "../../assets/assets";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const onSearchHandler = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(input); // Call parent function
    }
  };

  return (
    <form
      onSubmit={onSearchHandler}
      className="flex items-center bg-white shadow-md rounded-full w-full 
                 max-w-sm px-3 py-2 border border-gray-200 
                 focus-within:ring-2 focus-within:ring-blue-500 transition"
    >
      {/* Search Icon */}
      <img
        src={assets.search_icon}
        alt="search_icon"
        className="w-5 h-5 text-gray-400 mr-2"
      />

      {/* Input */}
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          if (onSearch) onSearch(e.target.value); // live filtering
        }}
        placeholder="Search courses..."
        className="flex-1 bg-transparent text-gray-700 placeholder-gray-400 
                   text-sm md:text-base focus:outline-none"
      />

      {/* Button */}
      <button
        type="submit"
        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white 
                   font-medium rounded-full px-4 py-1.5 text-sm 
                   hover:from-blue-700 hover:to-indigo-700 shadow-sm 
                   active:scale-95 transition"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
