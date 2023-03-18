import { CollectionAttribute, Token } from "../types/types";

export const converToTokensArray = (rawTokens: any): Token[] => {
  return rawTokens
    .results!.map((token: any, index: number) => {
      return {
        id: token.id,
        collectionAddress: token.contract_address,
        token_name: token.token_name,
        cached_images: token.cached_images,
        price: token.recent_price?.price_usd ? Math.floor(token.recent_price.price_usd) : 10 * (index + 1),
        attributes: token.metadata?.attributes || [],
      };
    })
    .filter((token: Token) => !!token.cached_images);
};

export const filterByPrice = (tokens: Token[], priceRange: [number, number]): Token[] => {
  return tokens.filter((token) => token.price >= priceRange[0] && token.price <= priceRange[1]);
};

export const filterByAttribites = (tokens: Token[], filterAttributes: CollectionAttribute[]): Token[] => {
  const filterTokensWithAttribute = (token: Token, filterAttribute: CollectionAttribute) => {
    // match name
    const matchedTokenAttribute = token.attributes.find((tokenAttribute) => {
      return filterAttribute.name === tokenAttribute.trait_type;
    });

    if (!matchedTokenAttribute) return false;
    // match value
    return filterAttribute.value.includes(matchedTokenAttribute.value);
  };

  const result = filterAttributes.reduce((acc, filterAttribute) => {
    return acc.filter((token) => filterTokensWithAttribute(token, filterAttribute));
  }, tokens);

  return result;
};
