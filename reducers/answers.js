import { combineReducers } from 'redux'

import { ADD_ANSWER, RESET_ANSWER } from '../actions/actions'

const INITIAL_STATE = {
	answers: []
}

const answerReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ADD_ANSWER:
			return {
				...state,
				answers: [...state.answers, action.value]
			}
		case RESET_ANSWER:
			return {
				...state,
				answers: []
			}
		default:
			return state
	}
}

export default combineReducers({
	answerStore: answerReducer
})
