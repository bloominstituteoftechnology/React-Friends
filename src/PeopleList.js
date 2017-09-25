import React from 'react';
import './PeopleList.css';
 const PeopleList = (props) => {
    return (
        <div id="people_list">
        {props.people.map((person) => {
            return (
            <div className="person_box">
                <p>{person.first_name}</p>
                <p>{person.last_name}</p>
                <p>{person.email}</p>
            </div>
            );
        })}
        </div>
    );
}
export default PeopleList;