import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      essay: '',
      isFriendly: true,
      gender: '',
      favColor: 'blue',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value, type, checked } = e.target;
    type === 'checkbox'
      ? this.setState({
          [name]: checked,
        })
      : this.setState({ [name]: value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{this.state.firstName}</h1>
        <h1>{this.state.lastName}</h1>
        <input
          type='text'
          name='firstName'
          placeholder='First Name'
          value={this.state.firstName}
          onChange={this.handleChange}
        />
        <br />
        <input
          type='text'
          name='lastName'
          placeholder='Last Name'
          value={this.state.lastName}
          onChange={this.handleChange}
        />
        <br />
        <textarea
          name='essay'
          value={this.state.essay}
          cols='30'
          rows='10'
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor='isFriendly'>
          <input
            name='isFriendly'
            type='checkbox'
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          />
          is Friendly?
        </label>
        <br />
        <label htmlFor='gender'>
          <input
            name='gender'
            type='radio'
            value='male'
            checked={this.state.gender === 'male'}
            onChange={this.handleChange}
          />
          Male
        </label>
        <label htmlFor='gender'>
          <input
            name='gender'
            type='radio'
            value='female'
            checked={this.state.gender === 'female'}
            onChange={this.handleChange}
          />
          Female
        </label>
        <br />
        <label htmlFor='favColor'>Favorite Color</label>
        <select
          value={this.state.favColor}
          onChange={this.handleChange}
          name='favColor'
        >
          <option value='blue'>blue</option>
          <option value='green'>green</option>
          <option value='red'>red</option>
          <option value='orange'>orange</option>
          <option value='yellow'>yellow</option>
        </select>
        <h2>{this.state.favColor}</h2>
        <button>Submit</button>
      </form>
    );
  }
}

export default App;
