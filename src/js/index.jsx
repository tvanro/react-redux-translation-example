import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './rootReducer';

import LangSwitchContainer from './components/LangSwitch/LangSwitchContainer';
import HomePage from './pages/HomePage';

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <div className="container">
      <LangSwitchContainer />
      <HomePage />
    </div>
  </Provider>,
  document.getElementById('app')
);
