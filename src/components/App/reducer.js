import * as actions from './actions';

const initialState = {foo: 0, zen: 'No Zen'};

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.INCREMENT_FOO:
            return {...state, foo: state.foo + 1};
        case actions.ASYNC_FETCH:
            return {...state, zen: action.zen};
        default:
            return state;
    }
};

export default appReducer;