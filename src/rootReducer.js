import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {appReducer} from './components/App';


export default combineReducers({
    app: appReducer,
    routing: routerReducer
});