import './App.css';
import Inline from './components/Inline';
import Stylesheet from './components/Stylesheet';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './components/Form';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Form />
      </header>
    </div>
  );
}

export default App;

//  <Stylesheet primary={true} />
//     <Inline />
//     <h1 className='error'>Error</h1>
//     <h1 className={styles.success}>Success</h1>
