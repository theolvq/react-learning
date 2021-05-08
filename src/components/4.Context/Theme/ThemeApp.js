import React from 'react';
import Button from './components/4.Context/Theme/Button';
import Header from './components/4.Context/Theme/Header';
import ThemeContext from './components/4.Context/Theme/themeContext';

function App() {
  return (
    <div>
      <Header />
      <ThemeContext.Consumer>
        {theme => <Button theme={theme} />}
      </ThemeContext.Consumer>
      <Button />
      <Button />
    </div>
  );
}

export default App;
