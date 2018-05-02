import React from "react";
import PropTypes from "prop-types";

const PeopleList = props => {
    console.log("Props", props);
    return 
    <div>
    {props.People.map(people => {
        return (<div key = {people.first_name + people.last_name + people.email}>
            {people.first_name + people.last_name + people.email}
        </div>)
    } )}
    </div>
}

export default PeopleList;