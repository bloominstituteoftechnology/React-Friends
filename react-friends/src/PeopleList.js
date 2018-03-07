import React from 'react';

const PeopleList = props => {
    const {people} = props;
    return (
        <div>
        { props.people.map(person => {
            return(
                <div>{person.first_name}</div>
                
            )
        }
        )}
        </div>
    );
}

export default PeopleList;
