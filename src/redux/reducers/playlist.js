import { initialState } from "../store";
import { ADD_TO_PLAYLIST, REMOVE_FROM_PLAYLIST } from "../actions/actions";

const playListReducer = (state = initialState.playlist, action) => {
    const { type, payload } = action
    switch(type){
        case ADD_TO_PLAYLIST:
            return {
                ...state, 
                lists: [...state.lists, payload]  
            }
        case REMOVE_FROM_PLAYLIST: {
            return {
                ...state,
                lists: state.lists.filter((el, i) => i !== payload)
            }
        }      
        default: return state
    }

}

export default playListReducer