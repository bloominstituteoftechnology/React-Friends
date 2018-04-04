import React from "react";

const PeopleList = props => {
  // map over peopleProp return a dom elment for each name in list
  return <div>{props.peopleProp.map(c => <div>{c.names}</div>)}</div>;
};

export default PeopleList;