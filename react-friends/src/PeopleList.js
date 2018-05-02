import React from "react";

const PeopleList = props => {
    return (
        <div>
            {props.peoples.map(people => {
                return (
                    <div key={people.first_name + people.last_name + people.email}>
                    {people.first_name} {people.last_name} {people.email}
                    </div>
                )
            })}
        </div>       
    )
}

export default PeopleList;