import { getCharactersDetail, getAllCharacters } from "@backend/types/request";

export type reqType<M> = M extends "getCharactersDetail"
  ? getCharactersDetail
  : M extends "getAllCharacters"
  ? getAllCharacters
  : undefined;
