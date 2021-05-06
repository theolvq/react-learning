import React, { Component } from 'react';
import FormComponent from './FormComponent';

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      destination: '',
      vegan: false,
      vegetarian: false,
      celiac: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value, type, checked } = e.target;
    type === 'checkbox'
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return <FormComponent handleChange={this.handleChange} data={this.state} />;
  }
}

export default FormContainer;
