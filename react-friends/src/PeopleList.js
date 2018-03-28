import React from 'react';
import './PeopleList.css';

export const PeopleList = (props) => {
    return (
        <div>
            {props.people.map((person, index) => {
                return (
                    <div key = {index} className = "container">
                        <div className = "first">{ person.first_name }</div>
                        <div className = "last">{ person.last_name }</div>
                        <div className = "email">{ person.email }</div>
                    </div>
                )
            })}
        </div>
    )
}
 
export default PeopleList;