import React from "react";

const PeopleList = props => {
    return (
        <div>
     {props.friends.map(friend => {
         return (
             <div key={friend.first_name + friend.last_name + friend.email} >
             {friend.first_name} {friend.last_name} {friend.email}
             </div>
         );
     })}
            </div>
    )
}
export default PeopleList;