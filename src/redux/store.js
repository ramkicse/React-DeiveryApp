import { createStore, combineReducers, applyMiddleware } from 'redux'

import orderReducer from './reducers/OrderReducer'
import filterReducer from './reducers/FilterReducer'
import logger from 'redux-logger'

const store = createStore(combineReducers({
    orders: orderReducer,
    filters: filterReducer
}), applyMiddleware(logger))

export default store