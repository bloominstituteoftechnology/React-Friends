import React from 'react';
import './PeopleList.css';

const PeopleList = props => {
    return (
        <div>
            {props.people.map(peeps => {
                return <div className="peeps--boxes">{peeps.first_name} {peeps.last_name} {peeps.email}</div>
            })}
        </div>
    );
}

export default PeopleList;