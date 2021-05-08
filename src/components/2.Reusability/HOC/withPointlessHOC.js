import React from 'react';

export const withPointlessHOC = component => {
  const Component = component;
  return props => {
    return <Component {...props} />;
  };
};
