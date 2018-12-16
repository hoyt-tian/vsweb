import { createStore, combineReducers, applyMiddleware } from 'redux'
import { initialState } from './action'
import reducer from './reducer'
import { logger, dop } from './middleware'

export const store = createStore(combineReducers(reducer), initialState, applyMiddleware(dop, logger))
