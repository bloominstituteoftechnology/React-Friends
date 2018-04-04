import React from 'react';

const PeopleList = (props) => {
    // console.log(props);
    console.log(props.people);
    return (
        <div>
        {props.people.map(person => (
            <div>
                {person.first_name}
            </div>
        )}
        </div>
    );
}

export default PeopleList;
