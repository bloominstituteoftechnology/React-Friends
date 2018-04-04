import React from 'react';

const PeopleList = props => {
  return (
  <div>{props.people.map((person) =>
   <div> {props.first_name}</div>
  )}</div>
  )
}


export default PeopleList;


// return (
//     <div>
//     {props.citiesProp.map((c) =>
//       <div>{c.city}</div>
//     )}
//     </div>
//   )
//
//  return <div>{props.citiesProp.map(c => <div>{c.city}</div>)}</div>
