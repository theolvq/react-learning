import React, { Component } from 'react';
import MemoComp from './MemoComp';

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Theo',
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'Theo',
      });
    }, 2000);
  }
  render() {
    console.log('Parent Component Render');
    return (
      <>
        <h1>Parent Component</h1>
        <MemoComp name={this.state.name} />
        {/* <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} /> */}
      </>
    );
  }
}

export default ParentComp;
