import React, { Component } from 'react';

export const PeopleList = (props) => {
  return (
    <div>
      {props.people.map((person) => {
        return (
          <div className="box">
            <h1> {person.first_name} {person.last_name} </h1>
            <h2> {person.email} </h2>
          </div>
        );
      })}
    </div>
  );
}