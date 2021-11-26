import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk"
import likedReducer from "../reducers/liked";
import songsReducer from "../reducers/songs";
import playerReducer from "../reducers/player";
import { persistStore, persistReducer } from "redux-persist";
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
  playerSong: {
      player: {}
  }
};

const persistConfig = {
  key: "root",
  storage,
};

const allReducers = combineReducers({
  data: songsReducer,
  likes: likedReducer,
  playerSong: playerReducer
});

const persistedReducer = persistReducer(persistConfig, allReducers);

const store = createStore(
  persistedReducer,
  initialState,
  mainCompose(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

export default store

