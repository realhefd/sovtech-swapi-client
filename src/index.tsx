import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_API_ENDPOINT || 'https://ngu3u.sse.codesandbox.io/',
}) as any

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
document.title = 'Sovtech SWAPI Test';
