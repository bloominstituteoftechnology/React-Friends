import React from 'react';

const PeopleList = props => {
    return ( 
        <div>
             {props.people.map((person, index) => { 
                return [
                    <div key={index}>
                        <h2>{ person.first_name } { person.last_name } </h2>
                        <div>{ person.email }</div>
                    </div>,
                    <button>My Friends</button>,
                ]
            })}
        </div>     
    )
}

export default PeopleList;