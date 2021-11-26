import {UNDO} from '../actions/actions'


function undoable(state = initialState, action){
    const {past, present, future}

    switch (action.type){
        case UNDO:
            const previous = past[past.lenght - 1]
            const newPast = past.slice(0, past.lenght - 1)
            return{
                past:newPast,
                present: previous,
                future:[present, ...future]
            }
        default:
            const newPresent = reducer(present, action)
            if (present === newPresent) {
            return state
            }
            return {
            past: [...past, present],
            present: newPresent,
            future: []
            }
    }
}
export default undoable