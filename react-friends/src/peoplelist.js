import React from "react";

const PeopleList = props => {
  console.log("Props", props);
  // map over peopleProp return a dom elment for each name in list
  return <div>{props.peopleProp.map(c => <div>{c.people}</div>)}</div>;
};

export default peoplelist;