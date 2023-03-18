import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CollectionCard } from "../../components/CollectionCard";
import { Spinner } from "../../components/Spinner";
import { mockApi } from "../../data/mockApi";
import { Collection } from "../../types/types";

export const SearchResult = () => {
  const params = useParams<{ query: string }>();

  const [isLoading, setIsLoading] = useState(false);
  const [collections, setCollections] = useState<Collection[]>([]);
  const [recommendations, setRecommendations] = useState<Collection[]>([]);

  useEffect(() => {
    setIsLoading(true);
    if (!params.query) {
      return;
    }
    const collectionResult = mockApi.searchCollectionByName(params.query);
    const recommendationsResult = mockApi.randomCollections();

    Promise.all([collectionResult, recommendationsResult]).then((values) => {
      setIsLoading(false);
      setCollections(values[0]);
      setRecommendations(values[1]);
    });

    return () => {
      //TODO: cancel request
    };
  }, [params.query]);

  return (
    <div className="2xl:container 2xl:mx-auto">
      {isLoading && <Spinner />}
      <h1 className=" sr-only">{`Search results for ${params.query}`}</h1>
      <div className=" px-4 py-8 md:px-6 md:py-12">
        <div className="mb-10">
          <h2 className=" text-left text-2xl font-semibold text-gray-800 lg:text-2xl">Collection results</h2>
        </div>
        {!isLoading && collections.length === 0 && (
          <p>
            Not item found for <span className="font-semibold">{params.query}</span>
          </p>
        )}
        <div className="flex flex-wrap justify-start gap-6 lg:gap-8">
          {collections.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>
        <div className="my-10">
          <h2 className=" text-left text-2xl font-semibold text-gray-800 lg:text-2xl">You might also like</h2>
        </div>
        <div className="flex flex-wrap justify-start gap-6 lg:gap-8">
          {recommendations.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>
      </div>
    </div>
  );
};
