import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk"
import likedReducer from "../reducers/liked";
import songsReducer from "../reducers/songs";



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
    }
}

const allReducers = combineReducers({
    data : songsReducer,
    likes: likedReducer
})

const store = createStore(allReducers, initialState, mainCompose(applyMiddleware(thunk)))

export default store

