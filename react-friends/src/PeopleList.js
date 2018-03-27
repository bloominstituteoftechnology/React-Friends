import React from 'react';
import './PeopleList.css';



const PeopleList = (props) => {
    return (
        <div>
            <ul className="bulletEraser">
                    {props.name.map((friends) => {
                        return <li key={friends.id}>{friends.first_name}, {friends.last_name}: {friends.email}</li>         
                    })}
            </ul>
        </div>
    )
}

export default PeopleList