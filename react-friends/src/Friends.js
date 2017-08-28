import React from 'react';
import './Friends.css';

export const Friends = props => {
  return (
    <div>
      {props.friends.map(friend => {
        return (
          <ul
            className={props.showFriends ? 'Friends' : ''}
            key={friend.firstName + friend.lastName}
            onClick={() => {
              props.showFriendsHandler(friend);
            }}
          >
            <li className="Friend">
              <p>
                {friend.firstName} {friend.lastName}
              </p>
            </li>
          </ul>
        );
      })}
    </div>
  );
};
