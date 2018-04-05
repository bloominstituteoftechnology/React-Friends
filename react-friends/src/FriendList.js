import React from 'react';

const FriendList = props => {
    return (
        <div>
            {props.friends.map(friend => (
                <div key={friend.firstName + friend.lastName}>
                    {`${friend.firstName} ${friend.lastName}`}
                </div>
            ))}
        </div>
    );
};

export default FriendList;