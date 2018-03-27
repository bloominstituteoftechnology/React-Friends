import React from 'react';
// import './Peoplelist.css';

const PeopleList = props => {
    return (
        <div>
            {props.people.map(peeps => {
                return <div>{peeps.first_name} {peeps.last_name} {peeps.email}</div>
            })}
        </div>
    );
}

export default PeopleList;