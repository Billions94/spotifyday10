
import { canUndo, onUndo } from 'redux-undo'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        canUndo: state.data.past.length > 0
    }

}

const mapDispatchToProps = dispatch => {
    return {
        onUndo: () => dispatch(UndoActionCreators.undo())
    }
}

let Undo = ({ canUndo, onUndo }) => (
    <p>
        <button onClick={onUndo} disabled={!canUndo}>
            Undo
        </button>
    </p>
)

export default Undo