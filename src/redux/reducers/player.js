import { initialState } from "../store";
import { PUT_IN_PLAYER } from "../actions/actions";



const playerReducer = (state = initialState.playerSong, action) => {
    const { type, payload } = action
    switch(type){
        case PUT_IN_PLAYER:
            return {
                ...state, 
                player: payload
            }   
        default: return state
    }
}
export default playerReducer