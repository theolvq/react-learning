import Card from './components/Card';

function App() {
  return (
    <div className='App'>
      <h1>Code</h1>
      <Card cardColor='blue' />
      <Card cardColor='white' />
      <Card cardColor='red' />
    </div>
  );
}

export default App;

import RoundedImg from './RoundedImg';

function App() {
  return (
    <div className='App'>
      <h1>Code</h1>
      <RoundedImg
        src='https://picsum.photos/id/237/300/300'
        borderRadius='10px'
      />
    </div>
  );
}

export default App;
