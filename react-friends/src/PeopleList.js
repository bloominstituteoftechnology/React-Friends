import React, { Component } from 'react';

const PeopleList = props =>{

  return( <div>{props.people.map(person =>
      <div key={person.id}>
      <div>{`${person.first_name} ${person.last_name}`}</div>
      </div>)
  }</div>);

}
// class PeopleList extends Component {
//   constructor(props){
//   super(props);
//     this.state ={
//       people: props.people
//     };
//   };
//   render(){
//       return( <div></div>);
//     }
// }

export default PeopleList;
