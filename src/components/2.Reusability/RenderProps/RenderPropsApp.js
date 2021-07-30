import './App.css';
import Favorite from './components/Reusability/RenderProps/Favorite';
import Menu from './components/Reusability/RenderProps/Menu';

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
