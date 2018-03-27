import React from 'react';
import './PeopleList.css';

export const PeopleList = (props) => {
  return (
    <div>
      { props.people.map((person, index) => {
        return (
          <div key={index} className="People-Wrapper">
            <div>{ person.first_name }</div>
            <div>{ person.last_name }</div>
            <div>{ person.email }</div>
          </div>
        )}
      )}
    </div>
  );
}