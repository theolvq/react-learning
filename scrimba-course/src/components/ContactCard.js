import React from 'react';

const ContactCard = props => {
  console.log(props);
  return (
    <div className='contact-card'>
      <img src={props.imgURL} alt={`cute cat named ${props.name}`} />
      <h3>{props.name}</h3>
      <p>Phone: {props.phone}</p>
      <p>Email: {props.email}</p>
    </div>
  );
};

export default ContactCard;

/* <ContactCard
          name='Mr. Whiskerson'
          imgURL='http://placekitten.com/300/200'
          phone='(212) 555-1234'
          email='mr.whiskaz@catnap.meow'
        />
        <ContactCard
          name='Fluffykins'
          imgURL='http://placekitten.com/400/200'
          phone='(212) 555-1234'
          email='fluff@me.com'
        />
        <ContactCard
          name='Destroyer'
          imgURL='http://placekitten.com/400/300'
          phone='(212) 555-3456'
          email='ofworlds@yahoo.com'
        />
        <ContactCard
          name='Felix'
          imgURL='http://placekitten.com/200/100'
          phone='(212) 555-4567'
          email='thecat@hotmail.com'
        /> */
