import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import MainLayout from './components/MainLayout';
import store from './store';
import { BrowserRouter } from 'react-router-dom'

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  </Provider>
);

render(<App />, document.getElementById('app'));