import React from 'react';

const PeopleList = (props) => {
    return (
        <div className="">
            {props.people.map((person) => {
                return (
                    <div className="" key={person.id}>
                        <div className="First">{person.first_name}</div>
                        <div className="Last">{person.last_name}</div>
                        <div className="Email">{person.email}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default PeopleList;