import { character } from "@backend/types/response";
import { possibleEndPointsType } from "./useFetch.types";

export type resType<M extends possibleEndPointsType> =
  M extends "getCharactersDetail"
    ? character.getCharactersDetailResponse
    : M extends "getAllCharacters"
    ? character.getAllCharactersResponse
    : undefined;
