import React from 'react';
import './PeopleList.css';

const PeopleList = props => {
	return(
		<div className="PeopleWrapper">
			{props.people.map((person => {
				return (
					<div key={person.id} className="Person">
						<h3 className="Person__name">{person.first_name} {person.last_name}</h3>
						<p className="Person__occupation">{person.occupation}</p>
						<p className="PersonEmail">{person.email}</p>
						<div>
							<p className="Friends__title">Friends</p>
							{person.friends.map((friend, i) => {
								return <div key={i}>{friend.firstName}</div>
							})}
						</div>
					</div>
				)
			}))}
		</div>
	);
}

export default PeopleList;