export interface characterDataType {
  id: number;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
  urls: { type: string; url: string }[];
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: {
    available: number;
    returned: number;
    collectionURI: string;
    items: { resourceURI: string; name: string }[];
  };
  stories: {
    available: number;
    returned: number;
    collectionURI: string;
    items: { resourceURI: string; name: string; type: string }[];
  };
  events: {
    available: number;
    returned: number;
    collectionURI: string;
    items: { resourceURI: string; name: string }[];
  };
  series: {
    available: number;
    returned: number;
    collectionURI: string;
    items: { resourceURI: string; name: string }[];
  };
}

export type getAllCharactersResponse = {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: characterDataType[];
  };
  etag: string;
};
export interface getCharactersDetailResponse extends getAllCharactersResponse {}
