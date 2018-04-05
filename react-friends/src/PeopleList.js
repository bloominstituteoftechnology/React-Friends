import React from 'react';
export const PeopleList = props => {
    return ( //extracts & returns first & last name & email
      <div> {props.people.map( peoples => {
          return <div class="People-list"> {peoples.first_name}, {peoples.last_name}, {peoples.email} </div>
      })}
      </div>
    )
}

// export {PeopleList};