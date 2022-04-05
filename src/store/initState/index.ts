//  AUTH
const INITIAL_STATE_AUTH: AUTH_PROPS = {
  userInfo: {
    nickName: "",
    name: "",
    userId: "",
    role: "user",
  },
  weKnowHim: false,
};

export interface AUTH_PROPS {
  userInfo: userInfoProps;
  weKnowHim: boolean;
}

export type userInfoProps = {
  nickName: string;
  name: string;
  userId: string;
  role: differentRole;
};
export type differentRole = "user";

/**
 * BLACKLIST
 * shouldn't be persist
 */

export interface BLACKPROPS {
  errorMessage: string;
  requests: {
    request: {
      [url: string]: {
        result: any;
        timeStamp: number; // -> when the request where save
      };
    };
  };
}

const INITIAL_STATE_BLACKLIST: BLACKPROPS = {
  errorMessage: "",
  requests: {
    request: {},
  },
};

export const INITIAL_STATE = {
  auth: INITIAL_STATE_AUTH,
  blacklist: INITIAL_STATE_BLACKLIST,
};
