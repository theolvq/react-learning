import React from 'react';

const Callout = props => {
  return <div className='callout'>{props.children}</div>;
};

export default Callout;

// function InfoCallout(props) {
//   return (
//     <div className='callout'>
//       <h2>{props.header}</h2>
//       <p>{props.body}</p>
//     </div>
//   );
// }

// function EmailCallout(props) {
//   return (
//     <div className='callout'>
//       <h2>{props.header}</h2>
//       <input type='email' placeholder='Enter Email' />
//       <button>{props.btnText}</button>
//     </div>
//   );
// }

// function ImageCallout(props) {
//   return (
//     <div className='callout'>
//       <img src={props.img} width='100%' />
//       <figcaption>{props.caption}</figcaption>
//     </div>
//   );
// }
