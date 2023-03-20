import { useEffect, useState } from "react";
import { Spinner } from "../../components/Spinner";
import { TokenCard } from "../../components/TokenCard";
import { mockApi } from "../../data/mockApi";
import { Token } from "../../types/types";

type Props = {
  collectionId: string;
};

export const Tokenlist: React.FC<Props> = ({ collectionId }) => {
  const [tokens, setTokens] = useState<Token[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);
  const [hasMoreData, setHasMoreData] = useState(true);

  useEffect(() => {
    // fetch the first page of tokens
    setIsLoading(true);
    mockApi.getTokensByCollection(collectionId, currentPage).then((nextPageData) => {
      const newTokens = nextPageData.data;
      const allTokens = [...tokens, ...newTokens];
      setIsLoading(false);
      setTokens(allTokens);

      if (allTokens.length === nextPageData.pagination.totalRecords) {
        setHasMoreData(false);
      }
    });
  }, [currentPage]);

  const handleLoadMore = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  return (
    <>
      {isLoading && <Spinner />}
      <div className="w-full">
        <div className={"grid w-full grid-cols-fluid-xs gap-5 sm:grid-cols-fluid"}>
          {tokens.map((token) => (
            <TokenCard token={token} key={token.id} />
          ))}
        </div>

        {/* load more */}
        <div className="mt-5 px-[20%] lg:px-[30%]">
          {hasMoreData && (
            <button
              disabled={isLoading}
              onClick={handleLoadMore}
              className="mt-5 w-full rounded-md bg-gray-800 py-3 text-center text-lg font-medium text-white hover:bg-gray-700"
            >
              Load more
            </button>
          )}
          {!hasMoreData && tokens.length !== 0 && (
            <div className="mt-10 text-center text-lg text-gray-500">{`---- Showing all ${tokens.length} items ---`}</div>
          )}
        </div>
      </div>
    </>
  );
};
