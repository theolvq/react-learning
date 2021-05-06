import React from 'react';

const FormComponent = props => {
  return (
    <main>
      <form onSubmit={props.handleSubmit}>
        <input
          type='text'
          value={props.data.firstName}
          onChange={props.handleChange}
          placeholder='First Name'
          name='firstName'
        />
        <br />
        <input
          type='text'
          value={props.data.lastName}
          onChange={props.handleChange}
          placeholder='Last Name'
          name='lastName'
        />
        <br />
        <input
          type='text'
          value={props.data.age}
          onChange={props.handleChange}
          placeholder='Age'
          name='age'
        />
        <br />
        <label htmlFor='gender'>
          <input
            type='radio'
            value='male'
            checked={props.data.gender === 'male'}
            onChange={props.handleChange}
            name='gender'
          />
          Male
        </label>
        <label htmlFor='gender'>
          <input
            type='radio'
            value='female'
            checked={props.data.gender === 'female'}
            onChange={props.handleChange}
            name='gender'
          />
          Female
        </label>
        <br />
        <label htmlFor='destination'>
          Select your destination:
          <select
            name='destination'
            value={props.data.destination}
            onChange={props.handleChange}
          >
            <option value=''>Please choose a destination</option>
            <option value='Paris'>Paris</option>
            <option value='London'>London</option>
            <option value='Madrid'>Madrid</option>
          </select>
        </label>
        <br />
        <span>Do you have any dietary restrictions? </span>
        <label htmlFor='vegan'>
          Vegan
          <input
            type='checkbox'
            name='vegan'
            checked={props.data.vegan}
            onChange={props.handleChange}
          />
        </label>
        <label htmlFor='vegetarian'>
          Vegetarian
          <input
            type='checkbox'
            name='vegetarian'
            checked={props.data.vegetarian}
            onChange={props.handleChange}
          />
        </label>
        <label htmlFor='celiac'>
          Celiac
          <input
            type='checkbox'
            name='celiac'
            checked={props.data.celiac}
            onChange={props.handleChange}
          />
        </label>

        <br />

        <button>Submit</button>
      </form>
      <hr />
      <h2>Entered information:</h2>
      <p>
        Your name: {props.data.firstName} {props.data.lastName}
      </p>
      <p>Your age: {props.data.age} </p>
      <p>Your gender: {props.data.gender}</p>
      <p>Your destination: {props.data.destination}</p>
      <p>
        Your dietary restrictions: {props.data.vegan && 'vegan'}{' '}
        {props.data.vegetarian && 'vegetarian'} {props.data.celiac && 'celiac'}
      </p>
    </main>
  );
};

export default FormComponent;
