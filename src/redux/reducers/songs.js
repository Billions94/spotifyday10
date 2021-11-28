import { initialState } from "../store";
import { GET_SONGS, GET_TRACKLIST, GET_ARTIST_INFO } from "../actions/actions";


const songsReducer = (state =  initialState.data, action) => {
    const { type, payload } = action
    switch(type){
        case GET_SONGS:
            return {
                ...state,
                songs: payload
            }
        case GET_TRACKLIST:
            return {
                ...state,
                trackList: payload
            }
        case GET_ARTIST_INFO:
            return {
                ...state,
                artist: payload
            }
        default: return state
    }
}

export default songsReducer