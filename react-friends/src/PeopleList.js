import React from "react";

const PeopleList = props => {
    console.log("PROPS: ", props);
    return (
        <div>
            <h1>{props.messageFromAppjs}</h1>
            {props.friends.map(friend => {
                return (
                    <div key={people.first_name + people.last_name + people.email}>
                        {people.first_name} {people.last_name} {people.email}    
                    </div>
                );
            })}
        </div>
    );
}; 

export default PeopleList;









}