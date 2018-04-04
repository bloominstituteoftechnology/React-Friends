import React from 'react';

const PeopleList = (props) => {
    return <div>{props.peopleProps.map(p => <div>{p.first_name}{p.last_name}{p.email}</div>)}</div>;
};

export default PeopleList;