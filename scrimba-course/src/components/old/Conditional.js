import React from 'react';

function Conditional(props) {
  return (
    <div>{props.isLoading ? <h1>Loading...</h1> : <h1>Not loading</h1>}</div>
  );
}

export default Conditional;

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isLoading: true,
//     };
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({
//         isLoading: false,
//       });
//     }, 1500);
//   }

//   render() {
//     return (
//       <div>
//         <Conditional isLoading={this.state.isLoading} />
//       </div>
//     );
//   }
// }

// export default App;
