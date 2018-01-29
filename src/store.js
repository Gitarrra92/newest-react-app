import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

import usersReducer from './state/users'

const reducer = combineReducers({
users: usersReducer

})

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

export default store