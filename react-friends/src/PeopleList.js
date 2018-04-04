import React from 'react';
import './PeopleList.css';

export const PeopleList = props => {
    console.log('props', props);
    return <div>{props.peopleProps.map((p, index) => (
        <div key={index} className="Person">
            <div classname="Person__Name">{p.first_name} {p.last_name}</div>
            <div className="Person__Email"><a href="#">{p.email}</a></div>
            <button className="Person__Button">Show/Hide Friends</button>
            <FriendsList friends={p.friends}/>
        </div>
    ))}</div>;
};

const FriendsList = props => {
    return <div className="Person__Friends">{props.friends.map((f, index) => (
        <div>{f.firstName} {f.lastName}</div>
    ))}</div>
};