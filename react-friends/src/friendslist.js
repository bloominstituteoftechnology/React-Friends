import React from 'react';

const FriendsList = props => {
  return (
    <div>
      {props.myPeople.map((val, index) => <div key={index} >{val.first_name} {val.last_name}</div>)}
    </div>);
};

export default FriendsList;
