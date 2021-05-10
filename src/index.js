import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles.css';
import App from './App';
import { ThemeContextProvider } from './components/4.Context/Theme/themeContext';

ReactDOM.render(
  <ThemeContextProvider value={'dark'}>
    <App />
  </ThemeContextProvider>,
  document.getElementById('root')
);
