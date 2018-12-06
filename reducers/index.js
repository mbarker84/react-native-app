import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import answers from './answers'

const rootReducer = combineReducers({ answers, routing: routerReducer })

export default rootReducer
