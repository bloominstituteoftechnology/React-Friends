import React from "react";
import FriendsOfUser from "./FriendsOfUser";

const PeopleList = props => {
//   console.log("PROPS: ", props);
  return <div>
            <ol>
                {props.people.map((user, i) => {
                    return <li key={i} >
                                {`Name: ${user.first_name}, Last Name`}
                                {/* {display === true ? <div>Display True</div> : null} */}
                                <FriendsOfUser friends={user.friends} />
                            </li>
                })}
            </ol>
  </div>;
};

export default PeopleList;
