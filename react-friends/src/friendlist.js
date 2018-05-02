import React from 'react';

const FriendList = props => {
  return (
    <div>
      {props.myFriends.map((val, index) => <div className="Friend-entry"><div key={index} className="Friend-person">{val.firstName} {val.lastName} </div></div>)}
    </div>
  );
};

export default FriendList;
