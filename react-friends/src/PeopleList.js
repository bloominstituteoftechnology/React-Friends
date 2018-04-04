import React from "react"
// import { people } from "./people";

const PeopleList = (props) => {
    return (
        <div>
          {props.people.map(person => (
            <div>{person.first_name} {person.last_name} </div>
          ))}
        </div>
      );
}

export default PeopleList