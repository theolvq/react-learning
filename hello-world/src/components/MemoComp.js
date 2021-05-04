import React from 'react';

function MemoComp({ name }) {
  console.log('Rendering memo component');

  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
}

export default React.memo(MemoComp);
