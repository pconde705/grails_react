import React from 'react';
import { Provider } from 'react-redux';
import { HasRouter } from 'react-router-dom'
import App from './App';

const root = ({ root }) => (
  console.log(root);
  <Provider store = {store}>
    <HasRouter>
      <App />
    </HasRouter>
  </Provider>
)

export default Root;
