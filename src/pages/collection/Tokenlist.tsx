import { useEffect, useState } from "react";
import { mockApi } from "../../data/mockApi";
import { Token } from "../../types/types";

type Props = {
  collectionId: string;
};

export const Tokenlist: React.FC<Props> = ({ collectionId }) => {
  const [tokens, setTokens] = useState<Token[]>([]);

  useEffect(() => {
    // fetch the first page of tokens
    mockApi.getTokensByCollection(collectionId).then((tokenList) => setTokens(tokenList.data));
  }, []);

  return (
    <div>
      {tokens.map((token) => (
        <div key={token.id}>
          <img src={token.cached_images.small_250_250} alt={token.name!} />
          <p>{token.name}</p>
        </div>
      ))}
    </div>
  );
};
