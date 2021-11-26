import { initialState } from "../store";
import { LIKE_SONGS } from "../actions/actions";

const likedReducer = (state = initialState.likes, action) => {
    const { type, payload } = action
    switch(type){
        case LIKE_SONGS:
            return {
                ...state,
                 liked: [...state.liked, payload]
            }
        default: return state
    }
}
export default likedReducer