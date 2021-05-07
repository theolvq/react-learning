import './App.css';
import Favorite from './components/reusability/Favorite';
import Menu from './components/reusability/Menu';

function App() {
  return (
    <div>
      <Menu />
      <hr />
      <Favorite />
    </div>
  );
}

export default App;
