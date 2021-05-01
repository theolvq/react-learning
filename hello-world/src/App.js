import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Greet />
        <Welcome />
      </header>
    </div>
  );
}

export default App;
