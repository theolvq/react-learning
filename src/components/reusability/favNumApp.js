import './App.css';
import { withFavoriteNumber } from './withFavoriteNumber';

function App(props) {
  return (
    <div className='App'>
      <h1>{props.favNum}</h1>
    </div>
  );
}

export default withFavoriteNumber(App);
