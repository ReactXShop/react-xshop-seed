import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Token } from "../types/types";

type Props = {
  token: Token;
};

export const TokenCard: React.FC<Props> = ({ token }) => {
  const { addOrRemoveFromCart, isInCart } = useShoppingCart();
  const isIncart = isInCart(token);

  return (
    <Link
      to={`/token/${token.collectionAddress}/${token.id}`}
      className="inline-block rounded-xl focus:outline-none focus:ring-2"
    >
      <div className="flex select-none flex-col overflow-hidden rounded-xl bg-white shadow">
        <div className="bg-grey-50 overflow-hidden rounded-t-xl" role="img">
          <img
            loading="lazy"
            alt={`token image ${token.id}}`}
            src={token.cached_images.medium_500_500}
            className="aspect-square w-full border-none object-cover transition delay-100 ease-in-out hover:scale-110 "
          />
        </div>
        <div className=" rounded-b-xl p-1 px-3 sm:p-5 xl:p-8">
          <div className="flex justify-between pr-5">
            <div className="font-semibold text-gray-600">{`#${token.id}`}</div>
            <div className="text-base font-semibold">{`$${token.price}`}</div>
          </div>
          <div className="mt-1 flex items-center xl:mt-3 xl:mr-5 ">
            <button
              className="mr-3 h-6 w-6 rounded focus:outline-none focus:ring-2"
              aria-label={`add token ${token.name} to wish list`}
            >
              <HeartIcon
                className="hover:scale-110 "
                onClick={(e) => {
                  e.preventDefault();
                }}
              />
            </button>
            <button
              aria-label={`add token ${token.name} to cart`}
              className="mr-3 h-6 w-6 rounded focus:outline-none focus:ring-2"
            >
              <ShoppingBagIcon
                onClick={(e) => {
                  e.preventDefault();
                  addOrRemoveFromCart(token);
                }}
                className={`${isIncart ? "fill-gray-700" : ""} h-6 w-6 hover:scale-110`}
              />
            </button>

            <button
              aria-label="buy token"
              className="rounded-xl border-2 p-1 px-3 text-sm hover:bg-gray-100 focus:outline-none focus:ring-2"
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
