import { initialState } from "../store";
import { LIKE_SONGS, UNLIKED_SONGS } from "../actions/actions";

const likedReducer = (state = initialState.likes, action) => {
    const { type, payload } = action
    switch(type){
        case LIKE_SONGS:
            return {
                ...state,
                   liked: [...state.liked, payload]
            }
        case UNLIKED_SONGS:
            return {
                ...state,
                   liked: state.liked.filter((el, i) => i !== payload)
            }    
        default: return state
    }
}
export default likedReducer