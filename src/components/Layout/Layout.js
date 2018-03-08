import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Layout extends Component {
    render() {
        return (
            <div>
                <header>
                    Welcome
                    <Link to="/">Home</Link>
                    <Link to="/childlist">Children</Link>
                    <Link to="/another-route">Something else</Link>
                </header>
                {this.props.children}
                <footer>
                    Bye
                </footer>
            </div>
        )
    }
}

export default Layout;