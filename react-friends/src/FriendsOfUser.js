import React from 'react';

const FriendsOfUser = (props) => {
    return (
      <ol>
        Friends:
          {props.friends.map((friend, i) => {
          return <li key={i}>
            {friend.firstName} {friend.lastName}
          </li>})}
      </ol>
    );
  }
  
  export default FriendsOfUser;