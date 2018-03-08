import {connect} from 'react-redux';
import ChildListComponent from "./ChildListComponent";

const mapStateToProps = (state) => {
    return {foo: state.app.foo}
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ChildListComponent);
