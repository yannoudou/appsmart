import { ActionType } from "../types";

interface clearAllCacheBackEnd {
    type: ActionType.CLEAR_ALL_CACHE_BACK_END_REQUEST;
    payload: {
        url: string;
    };
}

interface cacheBackendRequest {
    type: ActionType.CACHE_BACK_END_REQUEST;
    payload: { url: string; data: any; result: any };
}

export type Action = clearAllCacheBackEnd | cacheBackendRequest;
