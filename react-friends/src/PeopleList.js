import React from "react";

export const PeopleList = props => {
  console.log("Props", props);
  // map over citiesProp return a dom elment for each city name in list
  return <div>{props.Person.map((ppl, index) => 
  <div key={"My" + index} class="allPeople"> 
  {ppl.first_name} {ppl.last_name} {ppl.email}</div>)}
  </div>;
};

//export default PeopleList;