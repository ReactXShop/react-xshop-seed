import { Collection, DataWithPagination, Token } from "../types/types";
import { allCollections } from "./collections";
import { converToTokensArray, filterByAttribites, filterByPrice } from "./tokens";
import { tokens } from "./tokens.rawdata";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
class MockApi {
  getTopCollections = () => allCollections.slice(0, 5);
  getToken = async (collectionId: string, id: string): Promise<Token | null> => {
    const tokensInCollection = this.getAllTokensByCollection(collectionId, null);
    return tokensInCollection.filter((token) => token.id === id)[0] || null;
  };
  getAllTokensByCollection = (address: string, filter: any): Token[] => {
    const token = tokens.filter((token) => token.contract_address === address)[0];
    const allTokens = converToTokensArray(token);
    let result = allTokens;
    if (filter) {
      if (filter.PriceFilter) {
        result = filterByPrice(result, filter.PriceFilter);
      }
      if (filter.AttributeFilter) {
        result = filterByAttribites(result, filter.AttributeFilter);
      }
    }

    return result;
  };

  getTokensByCollection = async (address: string, page = 0, filter: any): Promise<DataWithPagination<Token>> => {
    await sleep(1000);
    const pageSize = 8;

    const startIndex = page * pageSize;
    const endIndex = startIndex + pageSize;

    const allTokens = this.getAllTokensByCollection(address, filter);

    return {
      data: allTokens.slice(startIndex, endIndex),
      pagination: { pageNumber: page, totalRecords: allTokens.length, pageSize },
    };
  };
  getCollectionByName = (name: string): Collection => {
    return allCollections.filter((collection) => collection.name === name)[0];
  };
  searchCollectionByName = async (name: string): Promise<Collection[]> => {
    await sleep(1000);
    return allCollections.filter((collection) => collection.name.toLowerCase().includes(name.toLowerCase()));
  };
  randomCollections = async (): Promise<Collection[]> => {
    await sleep(1000);
    return Array.from(
      new Set([
        allCollections[Math.floor(Math.random() * allCollections.length)],
        allCollections[Math.floor(Math.random() * allCollections.length)],
        allCollections[Math.floor(Math.random() * allCollections.length)],
      ])
    );
  };
}

/**
 * Mock api for testing
 */
export const mockApi = new MockApi();
