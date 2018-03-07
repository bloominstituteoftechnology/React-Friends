import React from 'react';
import './PeopleList.css';

const PeopleList = props => {
    const { people }  = props;
    return(
        <div className = 'peopleList'>
            <h1>People List</h1>
            {people.map(eachPerson => {
                return (
                    <div key={eachPerson.id} className ='peopleList-item'>
                        <p>First Name: {eachPerson.first_name}</p>
                        <p>Last Name: {eachPerson.last_name}</p>
                        <p>emal: {eachPerson.email}</p>
                        <br />
                    </div>
                );
            })};
        </div>
    );



};



export default PeopleList;