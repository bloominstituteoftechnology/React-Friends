import React from "react";
import './PeopleList.css';

 const PeopleList = props => {
   console.log('people props', props);
    return (
      <div>
          {props.pep.map((m, index) => <div key={m + index} className='friend__card'>
          <h1>{m.first_name} {m.last_name}</h1>
          <h3>{m.email}</h3>
          <h4>{m.occupation}</h4>
            <div>
              {m.friends.map((f, index) => <div key={f + index} className='friend-friends'>
                <span>{f.firstName} {f.lastName}</span>
            </div>)}
          </div>
          </div>)}
      </div>
    );
  };

  export default PeopleList;