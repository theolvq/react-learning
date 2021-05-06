import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      character: {},
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch('https://swapi.dev/api/people/1/')
      .then(res => res.json())
      .then(data => {
        this.setState({
          character: data,
          loading: false,
        });
      });
  }

  render() {
    return (
      <div>
        <h1>{this.state.loading ? 'Loading..' : this.state.character.name}</h1>
      </div>
    );
  }
}

export default App;

// 'https://swapi.dev'
