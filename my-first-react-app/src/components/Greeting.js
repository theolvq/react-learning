import React from 'react';

const UserGreeting = props => {
  return <h1>Welcome Back!</h1>;
};

const GuestGreeting = props => {
  return <h1>Please Sign up</h1>;
};

const Greeting = props => {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) return <UserGreeting />;
  else return <GuestGreeting />;
};

export default Greeting;
