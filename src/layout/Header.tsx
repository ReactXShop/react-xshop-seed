import { Link } from "react-router-dom";
import { SearchBar } from "../components/SearchBar";

export const Header = () => {
  return (
    <div className="sticky top-0 bg-indigo-400">
      <div className="bg-gray-50 px-6 py-6 shadow">
        <div className="container mx-auto flex items-center justify-start">
          <h1 className="text-2xl font-black text-gray-800 dark:text-black">
            <Link to="/" className="outline-none">
              XShop
            </Link>
          </h1>
          <ul className="hidden w-8/12 items-center justify-start space-x-8 pl-8 text-xl text-gray-800 dark:text-black md:flex">
            <li>
              <Link to="/" className="rounded p-2 outline-none hover:text-gray-600 focus:ring-2 ">
                Marketplace
              </Link>
            </li>
          </ul>
          <div className="flex items-center justify-end space-x-4 md:w-2/12 xl:space-x-8">
            <div className="hidden items-center lg:flex">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
