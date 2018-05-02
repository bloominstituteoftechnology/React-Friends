import React from 'react';
import FriendList from "./friendlist.js";

const PeopleList = props => {
  return (
    <div>
      {props.myPeople.map((val, index) => <div key={index} className="List-entry"><div className="List-person">{val.first_name} {val.last_name} </div><div className="List-email">{val.email}</div><FriendList myFriends={val.friends}/></div>)}

    </div>);
};

export default PeopleList;
