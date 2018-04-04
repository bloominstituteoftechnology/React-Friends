import React from 'react';
import './App.css'



export const PeopleList = (props) => {
    console.log(props);
    return (
    <div className="ListofPeople">
        {props.people.map((people => {
            return (
                <div>
                    <p>{people.first_name}</p>
                    <p>{people.last_name}</p>
                    <p>{people.email}</p>
                </div>    
            )
        }))}
    </div>
    )
}