import * as actions from './actions';

const initialState = {foo: 0};

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.INCREMENT_FOO:
            return {...state, foo: state.foo + 1};
        default:
            return state;
    }
};

export default appReducer;