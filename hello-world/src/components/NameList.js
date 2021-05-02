import React from 'react';
import { Person } from './Person';

const NameList = () => {
  // const names = [
  //   {
  //     firstName: 'Bruce',
  //     lastName: 'Wayne',
  //     heroName: 'Batman',
  //   },
  //   {
  //     firstName: 'Clark',
  //     lastName: 'Kent',
  //     heroName: 'Superman',
  //   },
  //   {
  //     firstName: 'Diana',
  //     lastName: 'Prince',
  //     heroName: 'Wonder Woman',
  //   },
  // ];

  // const nameList = names.map(hero => (
  //   <div>
  //     <h2>
  //       My name is {hero.firstName} {hero.lastName}, but they call me
  //       {hero.heroName}
  //     </h2>
  //   </div>
  // ));
  // const persons = [
  //   {
  //     id: 1,
  //     name: 'Bruce',
  //     skill: 'kick asses',
  //   },
  //   {
  //     id: 2,
  //     name: 'Clark',
  //     skill: 'resist bullets',
  //   },
  //   {
  //     id: 3,
  //     name: 'Diana',
  //     skill: 'am awesome',
  //   },
  // ];
  // const personList = persons.map(person => (
  //   <Person key={person.id} person={person}></Person>
  // ));
  // return <div>{personList}</div>;
  const names = ['Bruce', 'Clark', 'Diana', 'Bruce'];
  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {index} {name}
    </h2>
  ));
  return <div>{nameList}</div>;
};

export default NameList;
