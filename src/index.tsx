import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import Dashboard from './Dashboard';
import reportWebVitals from './reportWebVitals';

// Create Redux store with Thunk middleware
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk)
    // Add any other middleware or enhancers here
  )
);

// Render the application with Redux store
render(

    <Provider store={store}>
      <Dashboard />
    </Provider>,
  document.getElementById('root')
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
