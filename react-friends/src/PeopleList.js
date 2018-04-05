import React from 'react';
export const PeopleList = props => {
    return ( //extracts & returns first & last name & email
      <div class="row"> 
          <div class="col-sm-6">
              {props.people.map( peoples => {
              return <div class="People-list"> {peoples.first_name} {peoples.last_name}</div>
              })}
          </div>
          <div class="col-sm-6">
              {props.people.map( peoples => {
              return <div class="People-list"> <a href={`mailto:${peoples.email}`}>{peoples.email}</a> </div>
              })}
          </div>
            {/* {props.people.map( peoples => {
            return <div class="People-list"> {peoples.first_name} {peoples.last_name}: <a href={`mailto:${peoples.email}`}>{peoples.email}</a> </div>
        })} */}
      </div>
    )
}

// export {PeopleList};      // experimenting w export syntax

// return ( //extracts & returns first & last name & email
//   <div> {props.people.map( peoples => {
//       return <div class="People-list"> {peoples.first_name}, {peoples.last_name}, {peoples.email} </div>
//   })}
//   </div>
// )
// }