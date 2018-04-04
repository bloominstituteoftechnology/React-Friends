import React from 'react';
//not sure if below line is needed
import { people } from './people';

const PeopleList = props => {
    console.log("props",props);
    console.log(props.people[1])
    return <div>{props.people.map((c,i) => 
    <div key={c+i}>{c.people}</div>)}</div>;
    // return <div>{props.people.map(c => <div>{c.people}</div>)}</div>;
}

export default PeopleList;