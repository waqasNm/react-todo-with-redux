import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import rootReducers from './reducers';

const store = createStore(
    rootReducers,
    {},
    applyMiddleware(thunk)
)


export default  store;
