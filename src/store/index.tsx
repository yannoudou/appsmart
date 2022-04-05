import { createStore, applyMiddleware, Store } from "redux";
import { createWrapper } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";
import reducers, { StateType } from "./reducers";
import { Action } from "./actions/action-types";

// BINDING MIDDLEWARE
const bindMiddleware = (middleware: any) => {
  return applyMiddleware(...middleware);
};

const craeteTheStore = () => {
  //If it's on server side, create a store
  const store: Store<StateType, Action> = createStore(
    reducers,
    bindMiddleware([thunkMiddleware])
  );
  return store;
};

export const wrapper = createWrapper(() => craeteTheStore());

// import { createStore, applyMiddleware, Store, Action as ReduxAction } from "redux";
// import { createWrapper, HYDRATE } from "next-redux-wrapper";
// import thunkMiddleware from "redux-thunk";
// import reducers, { State } from './reducers';
// import { INITIAL_STATE } from './initState';
// import { Action } from "./actions/action-types";

// // BINDING MIDDLEWARE
// const bindMiddleware = (middleware: any) => {
//     if (process.env.NODE_ENV !== "production") {
//         const { composeWithDevTools } = require("redux-devtools-extension");
//         return composeWithDevTools(applyMiddleware(...middleware));
//     }
//     return applyMiddleware(...middleware);
// };

// const migrations = {
//     9: (state: State) => {
//         // migration clear out device state
//         return {
//             ...state,
//             auth: INITIAL_STATE['auth'],
//             blacklist: INITIAL_STATE['blacklist']
//         }
//     }
// };

// type makeStoreType = {
//     isServer: any
// }

// interface ExtendedStore<S, A extends ReduxAction> extends Store<S, A> {
//     __persistor?: any;
// }

// const makeStore = ({ isServer }: makeStoreType) => {

//     if (isServer) {
//         //If it's on server side, create a store
//         const store: ExtendedStore<State, Action> = createStore(reducers, bindMiddleware([thunkMiddleware]));
//         return store;
//     } else {

//         //If it's on client side, create a store which will persist
//         const { persistStore, persistReducer, createMigrate } = require("redux-persist");
//         const storage = require("redux-persist/lib/storage").default;

//         const persistConfig = {
//             key: "root",
//             version: 9,
//             migrate: createMigrate(migrations, { debug: false }),
//             //   whitelist: ["counter"], // only counter will be persisted, add other reducers if needed
//             storage, // if needed, use a safer storage
//         };

//         const persistedReducer = persistReducer(persistConfig, reducers); // Create a new reducer with our existing reducer

//         const store: ExtendedStore<State, Action> = createStore(
//             persistedReducer,
//             bindMiddleware([thunkMiddleware])
//         ); // Creating the store again

//         let persistor = persistStore(store, null,
//             () => {
//                 console.warn('restored');
//             }
//         );

//         // persistor.purge();   // ca sert  VIDER LE REDUX STORE

//         store.__persistor = persistor; // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature

//         return store;
//     }
// };

// // Export the wrapper & wrap the pages/_app.js with this wrapper only
// export const wrapper = createWrapper((a: any) => makeStore(a));
