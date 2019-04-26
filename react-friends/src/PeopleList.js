import React from 'react';

const PeopleList = props => {
    const {people} = props;
    return (
        <div>
        { props.people.map(person => {
            return(
                <div>
                    <div>{person.first_name}</div>
                    <div>{person.last_name}</div>
                    <div>{person.email}</div>
                </div>    
            );
        }
        )}
        </div>
    );
}

export default PeopleList;
