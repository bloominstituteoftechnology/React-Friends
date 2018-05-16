import React from 'react';
import people from './people';
import './App.css';

export const PeopleList = props => {
    const { name, people } = props;
    return (
        <div className="People-Wrapper">
        {props.people.map((people => {
          return (
              <div>
                <h4>Name: {people.first_name} {people.last_name}</h4>                
                <p>Email: {people.email}</p>
                <p>Gender: {people.gender}</p>
                <p>Occupation: {people.occupation}</p>
              </div>
            )
        }))}
        </div>
    );
};

