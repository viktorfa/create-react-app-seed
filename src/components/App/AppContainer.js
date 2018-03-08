import {connect} from 'react-redux';
import AppComponent from "./AppComponent";
import * as actions from './actions';

const mapStateToProps = (state) => {
    return {foo: state.app.foo, zen: state.app.zen}
};

const mapDispatchToProps = (dispatch) => {
    return {
        incrementFoo: () => dispatch(incrementFoo()),
        asyncFetch: () => dispatch(asyncFetch()),
    }
};


const incrementFoo = () => {
    return {type: actions.INCREMENT_FOO};
};

const asyncFetch = () => {
    const apiUrl = 'https://api.github.com/zen';
    return (dispatch) => {
        fetch(apiUrl).then((response) => {
            if (response.ok) {
                return response.text();
            } else {
                throw "Could not fetch from Github.";
            }
        }).then((zen) => {
            return dispatch({type: actions.ASYNC_FETCH, zen});
        }).catch((error) => {
            console.error(error);
        })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
