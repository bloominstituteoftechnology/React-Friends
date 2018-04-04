import React from 'react';

const PeopleList = props =>{
return <div>{props.people.map((person, index) => 
<div key = {person + index}>{person.first_name} {person.last_name} {person.email}</div>)}
</div>;
};

export default PeopleList;