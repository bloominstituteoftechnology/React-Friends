import React from "react";

const PeopleList = props => {
  //console.log("Props", props);
  // map over peopleProp return a dom elment for each person name in list
  return <div>{props.peopleProp.map(p => <div>{p.people}</div>)}</div>;
};

export default PeopleList;
