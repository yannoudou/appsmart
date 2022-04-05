import { reqType } from "./reqType";
import { resType } from "./resType";

export type PassBackValue<T extends possibleEndPointsType> = {
  result: resType<T>;
  requestParameter: ReqTypeArg<T>;
};

export type PassBackValueError<T extends possibleEndPointsType> = {
  result: unknown;
  requestParameter: ReqTypeArg<T>;
};

export type ReqTypeArg<B> = reqType<B>;
//  & AnyExtraValue<B>

export interface Props<B extends possibleEndPointsType> {
  url: string;
  onSuccess?: (a: PassBackValue<B>) => void;
  onError?: (a: PassBackValueError<B>) => void;
  shouldBeCached?: boolean;
  isUserLogin?: boolean;
  timeout?: number;
}

// export type AnyExtraValue<B> = {
//     // Allows any extra properties to be defined in an action.
//     [extraProps: string]: any
// }

export type differentMethodType = "GET" | "POST";
export type possibleEndPointsType = "getCharactersDetail" | "getAllCharacters";
