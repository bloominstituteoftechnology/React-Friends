import React from "react";

export const PeopleList = (props) => {
    console.log("Props", props)
return (<div>{props.name.map(p => <div>{p.first_name} {p.last_name}</div>)}</div>);
};

// export default PeopleList;