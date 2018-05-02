import React from 'react';

const PeopleList = props => {
  return (
    <div>
      {props.myPeople.map((val, index) => <div className="List-entry"><div key={index} className="List-person">{val.first_name} {val.last_name} </div><div className="List-email">{val.email}</div></div>)}
    </div>);
};

export default PeopleList;
