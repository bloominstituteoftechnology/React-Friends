import React from 'react';

export const PeopleList = props => {
    console.log('props', props);
    return <div>{props.peopleProps.map(p => <div>{p.first_name} {p.last_name} {p.email}</div>)}</div>;
};