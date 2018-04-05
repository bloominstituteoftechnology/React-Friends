import React from 'react'
import './PeopleList.css'

export const PeopleList = props => {
    return <div>{props.Person.map((people, index) => 
        <div key={"My" + index} className="myPeople">
            {people.first_name} {people.last_name} {people.email}</div>)}
        </div>;      
};
export default PeopleList;
