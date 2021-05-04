import './App.css';
import ParentComp from './components/ParentComp';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <ParentComp />
      </header>
    </div>
  );
}

export default App;

//  <Stylesheet primary={true} />
//     <Inline />
//     <h1 className='error'>Error</h1>
//     <h1 className={styles.success}>Success</h1>
