export type User = {
  name?: string;
  email: string;
};
export type Collection = {
  id: string;
  name: string;
  display_name?: string;
  description?: string;
  image: string;
  banner_image?: string;
  logo_image?: string;
  owner?: string;
  ownerImage?: string;
  market_cap?: number; // fake data
  total_supply: number; // fake data
  attributes: CollectionAttribute[];
};

export type Token = {
  id: string;
  collectionAddress: string;
  name: string | null;
  description?: string;
  cached_images: {
    tiny_100_100?: string;
    small_250_250?: string;
    medium_500_500?: string;
    large_1000_1000?: string;
    original?: string;
  };
  owner?: string;
  ownerImage?: string;
  price: number;
  attributes: TokenAttribute[];
};

export type Pagination = {
  pageNumber: number;
  totalRecords: number;
  pageSize: number;
};

export type DataWithPagination<T> = {
  data: T[];
  pagination: Pagination;
};

export type CollectionAttribute = {
  name: string;
  value: string[];
};

export type TokenAttribute = {
  trait_type: string;
  value: string;
};

export type Filter = {
  PriceFilter?: [number, number];
  AttributeFilter?: CollectionAttribute[];
};
