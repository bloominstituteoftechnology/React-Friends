import React from "react";

export const PeopleList = props => {
  console.log("Props", props);
  
  return <div>{props.peopleProp.map(p => <div>`{p.first_name}{" "}{p.last_name}{"  "} {p.email}`</div>)}</div>;
};


