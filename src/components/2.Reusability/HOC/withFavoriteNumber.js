import React from 'react';

export function withFavoriteNumber(component) {
  const C = component;
  return props => {
    return <C favNum={7} {...props} />;
  };
}
