import React from "react";
import './PeopleList.css';

const PeopleList = props => {
    console.log("Propsi", props);
    return props.people.map(name => <div className="names" key={name.first_name}> Name: <span className="f-name">{name.first_name}</span> <span className="l-name"> {name.last_name}</span>, Email: <span className="email"> {name.email}</span></div>);
}

export default PeopleList;