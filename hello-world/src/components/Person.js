import React from 'react';

export const Person = ({ person }) => {
  return (
    <div>
      <h2>
        My name is {person.name}, and I {person.skill}
      </h2>
    </div>
  );
};
