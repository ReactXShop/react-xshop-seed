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

  useEffect(() => {
    // fetch the first page of tokens
    setIsLoading(true);
    mockApi.getTokensByCollection(collectionId).then((tokenList) => {
      setIsLoading(false);
      setTokens(tokenList.data);
    });
  }, []);

  return (
    <>
      {isLoading && <Spinner />}
      <div className="w-full">
        <div className={"grid w-full grid-cols-fluid-xs gap-5 sm:grid-cols-fluid"}>
          {tokens.map((token) => (
            <TokenCard token={token} key={token.id} />
          ))}
        </div>
      </div>
    </>
  );
};
