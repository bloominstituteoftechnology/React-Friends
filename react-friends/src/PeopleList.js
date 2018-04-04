import React from "react";

const PeopleList = props => {
  console.log("Props", props);
  // map over citiesProp return a dom elment for each first_name and last_name in list
  return <div>{props.people.map(content => <div>{content.first_name} {content.last_name}</div>)}</div>;
};

export default PeopleList;
