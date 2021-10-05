import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Container from './components/Container';

const App = () => (
  <div>
    <Provider store={store}>
      <Container />
    </Provider>
  </div>
);

export default App;
