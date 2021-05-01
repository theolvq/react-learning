import './App.css';
import Welcome from './components/Welcome';
// import Greet from './components/Greet';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Counter />
        {/* <Greet name='Bruce' heroName='Batman'></Greet>
        <Greet name='Clark' heroName='Superman'></Greet>
        <Greet name='Diana' heroName='Wonder Woman' /> */}
        <Welcome name='Bruce' heroName='Batman' />
        <Welcome name='Clark' heroName='Superman' />
        <Welcome name='Diana' heroName='Wonder Woman' />
        <Message />
      </header>
    </div>
  );
}

export default App;
