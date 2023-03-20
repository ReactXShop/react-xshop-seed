import { Bars3BottomLeftIcon } from "@heroicons/react/20/solid";
import { CheckBadgeIcon, HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ImageWithLoader } from "../../components/ImageWithLoader";
import { mockApi } from "../../data/mockApi";
import { Token } from "../../types/types";

export const TokenDetails = () => {
  const navigate = useNavigate();
  const { collectionId, id } = useParams();
  const [token, setToken] = useState<Token | null>(null);

  useEffect(() => {
    mockApi.getToken(collectionId!, id!).then((token) => {
      setToken(token);
    });
  }, []);

  if (!token) {
    return null;
  }

  return (
    <div className="2xl:container 2xl:mx-auto">
      <div className="flex flex-col gap-5 px-4 py-8 md:px-6 md:py-12 lg:flex-row">
        <ImageWithLoader originurl={token.cached_images.large_1000_1000} />
        <div className=" flex-0 mt-10 lg:mt-0 lg:flex-1">
          <div className="mb-2">
            <button className=" mt-3 underline" onClick={() => history.go(-1)}>
              Back to collection
            </button>
          </div>
          <h1 className="text-3xl font-extrabold text-gray-800">{`#${token.id}`}</h1>
          <span className=" text-gray-500">Owned by ETRR</span>

          <p className=" mt-3 text-2xl font-bold text-gray-800">{`$${token.price}`}</p>

          <div className="mt-5 mb-5 w-full rounded-xl border border-gray-300">
            <div className="flex items-center border-b p-4">
              <Bars3BottomLeftIcon className="mr-3 h-5 w-5" />
              <span className="text-lg font-semibold text-gray-800">Description</span>
            </div>
            <p className="rounded-xl bg-gray-100 p-5 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam enim ea accusantium. Temporibus, debitis
              ullam labore eaque, fuga quidem quo doloribus incidunt quaerat animi facere doloremque repudiandae neque
              praesentium. Minus?
            </p>
          </div>

          <div className="flex-row gap-6 lg:flex">
            <button className="flex w-full items-center justify-center rounded-xl border-2 p-2 px-3 text-xl font-medium text-gray-600 hover:bg-gray-100">
              <CheckBadgeIcon className="mr-3 h-6 w-6" />
              <p>Buy now</p>
            </button>

            <button className="mt-3 flex w-full items-center justify-center rounded-xl border-2 p-2 px-3 text-xl font-medium text-gray-600 hover:bg-gray-100 lg:mt-0">
              <ShoppingBagIcon className="mr-3 h-6 w-6" />
              <p>{`${false ? "Remove from" : "Add to"} cart`}</p>
            </button>

            <div>
              <HeartIcon className="mr-3 mt-3 h-6 w-6 hover:scale-110" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
