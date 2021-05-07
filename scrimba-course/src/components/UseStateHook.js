import React, { useState } from 'react';

const App = () => {
  const [answer] = useState('Heck Yes!');
  return (
    <div>
      <h1>Is state important to know? {answer}</h1>
    </div>
  );
};

export default App;

// import React, { useState } from 'react';

const App2 = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
};

export default App2;

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       answer: 'Yes',
//     };
//   }

//   render() {
//     return (
//       <div>
//         <h1>Is state important to know? {this.state.answer}</h1>
//       </div>
//     );
//   }
// }

// export default App;
