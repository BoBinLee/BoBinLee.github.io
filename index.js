import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Root from './components/Root';

import FireBaseConfig from './config/FirebaseConfig';

const render = Component => {
  console.log('init() :: App starts booting...');
  injectTapEventPlugin();

  // Check for devToolsExtension
  const create = window.devToolsExtension ? window.devToolsExtension()(
    createStore) : createStore;

  // Apply thunk and additional middleware if applicable
  const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(create);

  FireBaseConfig.init();

  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app'),
  );
};

render(Root);

if (module.hot) {
  module.hot.accept('./components/Root', () => { render(Root); });
}