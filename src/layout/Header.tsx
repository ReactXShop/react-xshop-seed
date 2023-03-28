import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { SearchBar } from "../components/SearchBar";
import { useShoppingCart } from "../context/ShoppingCartContext";

export const Header = () => {
  const { cart } = useShoppingCart();

  return (
    <div className="sticky top-0 z-50">
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
            <div className=" items-center space-x-2 sm:flex xl:space-x-3">
              {/* shopping cart */}
              <button
                aria-label="go to cart"
                className="rounded text-gray-800 outline-none  focus:ring-2 dark:text-gray-800 dark:hover:text-gray-500"
              >
                {/* <strong className="relative inline-flex items-center rounded  border-gray-200 px-2.5 py-1.5 text-xs font-medium">
                  {cart.length > 0 && (
                    <span className="items absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-gray-600 text-white">
                      <span>{cart.length}</span>
                    </span>
                  )} */}
                <Link tabIndex={-1} to={`shopping-cart`} title="cart">
                  <ShoppingBagIcon className="h-6 w-6" />
                </Link>
                {/* </strong> */}
              </button>
              {/* profile menu */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
