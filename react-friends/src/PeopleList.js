import React from 'react';
import './PeopleList.css';

export const PeopleList = props => {
    return ( //extracts & returns first & last name & email
        <div class="row"> 
            <div class="col-6"> {props.people.map( peoples => {
                return <div class="People-list"> {peoples.first_name}, {peoples.last_name}, <a href={`mailto:${peoples.email}`}>{peoples.email}</a> </div>
            })}
            </div>
        </div>
    )
}

//Instructor Solution Code: 

//const PeopleList = props => {
  //return {
    //<div>
    //{props.people.map(person => (
      //<div key={person.id}>
      //<div>{`${person.first_name} ${person.last_name}`}</div>
      //<p>{person.email}</p>
      //<FriendsList friends={person.friends} />
      //</div>
 // ))}
 // </div>
//  };
//};
// export default PeopleList;