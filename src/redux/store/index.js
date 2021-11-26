import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk"
import likedReducer from "../reducers/liked";
import songsReducer from "../reducers/songs";
import playerReducer from "../reducers/player";




const mainCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
    data: {
        songs: [],
        albums: [],
        artist: [],
        trackList: {},
        isLoading: true
    },
    likes: {
        liked: []
    },
    playerSong: {
        player: {}
    }
}

const allReducers = combineReducers({
    data : songsReducer,
    likes: likedReducer,
    playerSong: playerReducer
})

const store = createStore(allReducers, initialState, mainCompose(applyMiddleware(thunk)))

export default store

