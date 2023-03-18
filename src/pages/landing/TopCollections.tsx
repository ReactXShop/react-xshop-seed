import { CollectionCard } from "../../components/CollectionCard";
import { allCollections as collections } from "../../data/collections";

export const TopCollections = () => {
  console.log("zzzzz--------------->", collections);

  return (
    <div className="2xl:container 2xl:mx-auto">
      <div className="px-0 py-8 md:px-6 md:py-12 lg:px-4">
        <div className="mb-5 lg:mb-10">
          <h1 className="text-center text-3xl font-semibold text-gray-800 lg:text-3xl">Top Collections</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {collections.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>
      </div>
    </div>
  );
};
