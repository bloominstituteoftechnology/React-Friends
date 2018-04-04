import React from "react";

const PeopleList = props => {
  console.log("Props", props);
  // map over citiesProp return a dom elment for each city name in list
  return <div>{props.peopleProp.map(p => <div>{p.people}</div>)}</div>;
};

export default PeopleList;
