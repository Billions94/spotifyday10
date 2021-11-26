import { initialState } from "../store";
import { GET_SONGS } from "../actions/actions";


const songsReducer = (state =  initialState.data, action) => {
    const { type, payload } = action
    switch(type){
        case GET_SONGS:
            return {
                ...state,
                songs: payload
            }
        default: return state
    }
       
}

export default songsReducer