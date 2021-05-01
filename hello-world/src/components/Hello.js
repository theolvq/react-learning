import React from 'react';

const Hello = () => {
  return (
    <div className='classy'>
      <h1>Hello, again!</h1>
    </div>
  );
  // return React.createElement(
  //   'div',
  //   {
  //     id: 'hello',
  //     className: 'classy',
  //   },
  //   React.createElement('h1', null, 'Hello, again.')
  // );
};

export default Hello;
