import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  id?: string;
};
export const SearchBar: React.FC<Props> = ({ id = "searchInput" }) => {
  const [searchInput, setSearchInput] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchInput.length < 3) return;
    navigate(`/search/${searchInput}`);
  };

  return (
    <form className="relative flex" onSubmit={handleSubmit}>
      <input
        onClick={(e) => {
          e.stopPropagation();
        }}
        onChange={(e) => setSearchInput(e.target.value)}
        id={id}
        type="text"
        placeholder="search for collections"
        aria-label="press enter to search for collections"
        className={`w-60 rounded-l-xl border-2 border-gray-300 py-2 text-lg text-gray-800 outline-none focus:border-gray-400 focus:outline-none dark:bg-white dark:placeholder-gray-400 md:w-96 lg:ml-8`}
      />
      <button
        type="submit"
        disabled={searchInput.length < 3}
        aria-label="search items"
        className="rounded-r-xl border-2 border-l-0 border-gray-300 bg-gray-200 px-2 text-gray-800 outline-none focus:ring-2 disabled:bg-gray-300 disabled:text-gray-500 dark:text-gray-800 dark:hover:text-gray-500"
      >
        <MagnifyingGlassIcon className="h-6 w-6" />
      </button>
    </form>
  );
};
