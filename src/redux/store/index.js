import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import likedReducer from "../reducers/liked";
import songsReducer from "../reducers/songs";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";

const mainCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  data: {
    songs: [],
    albums: [],
    artist: [],
    trackList: {},
    isLoading: true,
  },
  likes: {
    liked: [],
  },
};

const persistConfig = {
  key: "root",
  storage,
};

const allReducers = combineReducers({
  data: songsReducer,
  likes: likedReducer,
});

const persistedReducer = persistReducer(persistConfig, allReducers);

const store = createStore(
  persistedReducer,
  initialState,
  mainCompose(applyMiddleware(thunk))
);

let persistor = persistStore(store);

export default store;
