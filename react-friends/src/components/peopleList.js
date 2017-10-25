import React from 'react';

const PeopleList = ({ people }) => (
    <div className="people">
        {
            people.map((person, i)=> (
                <div className="person" key={i}>
                    <h1>{ person.first_name } {person.last_name}</h1>
                    <h2>{ person.email }</h2>
                </div>
            ))
        }
    </div>
);

export default PeopleList;