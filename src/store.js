import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const reducer = combineReducers({


})

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)