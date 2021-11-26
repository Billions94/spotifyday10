import "./App.css";
import Footer from "./components/Footer";
import MyNavBar from "./components/MyNavBar";
import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import songsReducer from "./redux/reducers/songs";
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
});

const persistedReducer = persistReducer(persistConfig, allReducers);

const store = createStore(
  persistedReducer,
  initialState,
  mainCompose(applyMiddleware(thunk))
);

let persistor = persistStore(store);

function App() {
  const [artist, setArtist] = useState(null);

  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <MyNavBar artist={artist} setArtist={setArtist} />
            <Footer />
          </PersistGate>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
