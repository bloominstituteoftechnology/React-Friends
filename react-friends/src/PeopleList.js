import React from 'react';

const PeopleList = props => {
    return (
        <div>
            {props.friends.map(friend => {
                return (
                    <div key={friend.first_name + friend.last_name}>
                        {friend.first_name} {friend.last_name} {friend.email}        
                        <button onClick={props.showMenu}>
                            Friends
                    </button>
                    {
                    props.showMenu
                        ? (
              <ul> {friend.friends} </ul>
            )
            : (
              null
            )
        }
        </div>
            )
         }
     )
}
    </div>
)
}

      

export default PeopleList