import React from 'react';
import './PeopleList.css'

const PeopleList = (props) => {
    return (
        <div className="people">
                {props.people.map((profile, index) => {
                    return <div key={index} className="people-person">
                        <div>{profile.first_name}</div>
                        <div>{profile.last_name}</div>
                        <div>{profile.email}</div>
                    </div>
                })}
        </div>
    );
}

export default PeopleList;