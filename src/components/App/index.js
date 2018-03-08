/**
 * This file is the public access point. Everything other modules import should be available from index.js
 * The default export is what is needed to render the main component in App.
 */

import AppContainer from './AppContainer';
import appReducer from './reducer';

export {appReducer}

export default AppContainer;