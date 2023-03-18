import { Link } from "react-router-dom";
import { Collection } from "../types/types";

type Props = {
  collection: Collection;
};

export const CollectionCard: React.FC<Props> = ({ collection }) => {
  return (
    <Link
      to={`/collection/${collection.name}`}
      className="inline-block rounded-xl no-underline focus:outline-none focus:ring-2 focus:ring-gray-300"
    >
      <div className=" flex w-36 flex-col bg-white shadow transition delay-150 duration-300 ease-in-out hover:scale-110 sm:h-64 sm:w-48 md:h-80 md:w-60 xl:h-96 xl:w-80">
        <div className="bg-grey-50 flex-2 m-auto h-3/5 rounded-t-xl" role="img">
          <img
            loading="lazy"
            alt={`${collection.name} collection`}
            src={collection.image}
            className="aspect-square w-full rounded-xl border-none object-cover"
          />
        </div>
        <div className="flex-1 rounded-b-xl bg-white p-5 xl:p-8">
          <h2 className="... w-30 truncate font-semibold sm:w-48">{collection.display_name}</h2>
          <div className="mt-3 hidden justify-between text-xs font-semibold text-gray-600 sm:flex xl:mt-8 xl:mr-8">
            <div>
              <dt>TOKENS</dt>
              <dd>{collection.total_supply}</dd>
            </div>
            <div>
              <dt>MARKET CAP</dt>
              <dd>{collection.market_cap}</dd>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
