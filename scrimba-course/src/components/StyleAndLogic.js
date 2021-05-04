import React from 'react';

function StyleAndLogic() {
  const date = new Date();
  const time = date.getHours() % 24;

  const styles = {
    color: '#FF8C00',
    textDecoration: 'underline',
    fontSize: '5rem',
  };
  return (
    <div>
      <h1 style={styles}>
        Good {time < 12 ? 'Morning' : time < 18 ? 'Afternoon' : 'Night'}!
      </h1>
    </div>
  );
}

export default StyleAndLogic;
