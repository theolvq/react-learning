import './App.css';
import Inline from './components/Inline';
import Stylesheet from './components/Stylesheet';
import './appStyles.css';
import styles from './appStyles.module.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Stylesheet primary={true} />
        <Inline />
        <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1>
      </header>
    </div>
  );
}

export default App;
