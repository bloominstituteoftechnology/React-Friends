import React, { Component } from 'react';
import { people } from './people';

export const PeopleList = props => {
    const { name, people } = props;
    return (
      <div>
        <h2>A list of {name}</h2>
        {props.people.map((people => {
          return (
            <div key={people.id}>
              <p>First Name: {people.first_name}</p>
              <p>Last Name: {people.last_name}</p>
              <p>email: {people.email}</p>
              <p>gender: {people.gender}</p>
              <p>occupation: {people.occupation}</p>
              <p>friends: {people.friends}</p>
            </div>
          )
        }))}
      </div>
    );
  };
  