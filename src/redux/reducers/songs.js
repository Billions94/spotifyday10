import { initialState } from "../store";
import { GET_SONGS, GET_TRACKLIST, GET_ARTIST } from "../actions/actions";


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
        case GET_ARTIST:
            return {
                ...state,
                artistInfo: payload
            }
        default: return state
    }
}

export default songsReducer