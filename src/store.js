import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import mainReducer from './reducers/mainReducer';

export default createStore(
    combineReducers({
        mainReducer,
    }),
    composeWithDevTools(applyMiddleware(thunk))
);