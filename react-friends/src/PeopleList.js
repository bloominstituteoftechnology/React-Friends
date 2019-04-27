import React, { Component } from 'react';

export const PeopleList = props => {
    const { name, people } = props;
    return (
      <div>
        <h2>A list of {name}</h2>
        {people.map((person => {
          return (
            <div key={person.id}>
              <p>First Name: {person.first_name}</p>
              <p>Last Name: {person.last_name}</p>
              <p>email: {person.email}</p>
              <p>gender: {person.gender}</p>
              <p>occupation: {person.occupation}</p>
              <div>friends: {person.friends.map((friend, i) => {
                  console.log(friend)
                  return (
                      <div key={i}>
                        <p>{friend.firstName}</p>
                        <p>{friend.lastName}</p>
                    </div>
                  )
              })}
              </div>
            </div>
          )
        }))}
      </div>
    );
  };
  