import React from 'react';

const PeopleList = props => {
  return (
    <div>
      {props.myPeople.map((val, index) => <div key={index} className="List-person">{val.first_name} {val.last_name} <div>{val.email}</div></div>)}
    </div>);
};

export default PeopleList;
