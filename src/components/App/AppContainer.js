import {connect} from 'react-redux';
import AppComponent from "./AppComponent";
import * as actions from './actions';

const mapStateToProps = (state) => {
    return {foo: state.appReducer.foo}
};

const mapDispatchToProps = (dispatch) => {
    return {
        incrementFoo: () => dispatch(incrementFoo())
    }
};


const incrementFoo = () => {
    return {type: actions.INCREMENT_FOO};
};

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);