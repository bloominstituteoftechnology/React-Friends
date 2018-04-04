import React from "react";

const PeopleList = props => {
  console.log("Props", props);
  // map over PeopleProp return a dom elment for each peorson in list
  return <div m->{props.people.map(p => <div>{p.first_name} {p.last_name}:   {p.email}</div>)}</div>;
};

export default PeopleList;