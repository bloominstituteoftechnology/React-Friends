import React from 'react';
import { people } from './people';

//component function
const PeopleList = props =>  {
     
    return (
    <div>
    {props.peoples.map(people => {
        return(
        //passing key value pairs through div. 
            <div key={people.first_name + people.last_name}>
             {people.first_name} {people.last_name};
            </div>
            ) 
         })}
        </div>
    )
}

export default PeopleList;