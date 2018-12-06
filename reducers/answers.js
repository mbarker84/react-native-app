import { combineReducers } from 'redux'

const INITIAL_STATE = {
	answers: []
}

const answerReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'ADD_ANSWER':
			return [...state, action]
		default:
			return state
	}
}

export default combineReducers({
	answer: answerReducer
})
