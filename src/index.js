import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Switch} from 'react-router';
import {ConnectedRouter} from 'react-router-redux';
import './index.css';
import App from './components/App/';
import registerServiceWorker from './registerServiceWorker';
import store, {history} from './store';
import ChildList from "./components/ChildList";
import Layout from "./components/Layout/Layout";

ReactDOM.render((
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route path="/" component={App} exact/>
                    <Route>
                        <Layout>
                            <Switch>
                                <Route path="/childlist" component={ChildList}/>
                                <Route path="/another-route">
                                    <div>Something else</div>
                                </Route>
                            </Switch>
                        </Layout>
                    </Route>
                </Switch>
            </ConnectedRouter>
        </Provider>
    ),
    document.getElementById('root'));
registerServiceWorker();
