import React from 'react';

export const PeopleList = (props) => {
    return(
        <div>
            {props.people.map(person => {
                return(
                    <div key={person.first_name + person.last_name}>
                        <p>{person.first_name} {person.last_name}</p>
                    </div>
                );
            })
            }
        </div>
    )
}
