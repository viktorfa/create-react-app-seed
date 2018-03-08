import React, {Component} from 'react';
import PropTypes from 'prop-types';
import logo from '../../logo.svg';
import './App.css';

class AppComponent extends Component {

    constructor(props) {
        super(props);

        this.incrementFoo = this.props.incrementFoo.bind(this);
        this.asyncFetch = this.props.asyncFetch.bind(this);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    {this.props.zen}
                </p>
                <p>{this.props.foo}</p>
                <button onClick={this.incrementFoo}>Increment</button>
                <button onClick={this.asyncFetch}>Fetch zen</button>
            </div>
        );
    }
}

AppComponent.propTypes = {
    incrementFoo: PropTypes.func.isRequired,
    asyncFetch: PropTypes.func.isRequired,
    foo: PropTypes.number.isRequired
};

export default AppComponent;
