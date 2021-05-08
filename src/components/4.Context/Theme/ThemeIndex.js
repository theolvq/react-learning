import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles.css';
import App from './App';
import ThemeContext from './components/4.Context/themeContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContext.Provider value={'dark'}>
      <App />
    </ThemeContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
