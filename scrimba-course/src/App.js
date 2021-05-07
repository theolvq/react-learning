import React from 'react';
import Header from './components/Header';
import MemeGenerator from './components/MemeGenerator';
import './styles.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <MemeGenerator />
    </React.Fragment>
  );
}

export default App;
