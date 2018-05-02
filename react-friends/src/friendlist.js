import React from 'react';

const FriendList = props => {
  return (
    <div>
      {props.myFriends.map((val, index) => <div key={index} className="Friend-entry"><div className="Friend-person">{val.firstName} {val.lastName} </div></div>)}
    </div>
  );
};

export default FriendList;
