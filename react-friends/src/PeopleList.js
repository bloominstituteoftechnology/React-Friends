import React from 'react';

export const PeopleList = props => {
    const { people } = props;
    return (
        //My returning div is here..
        <div> 
            <h2>A list of all the peeps</h2>
            {people.map(ppl => {
                return (
                    <div key={ ppl.state }>
                        <p>Initial name is!.. {ppl.first_name}</p>
                        <p>Final name is!.. {ppl.last_name}</p>
                        <p>Your electronic mail!.. {ppl.email}</p>
                    </div>
                )
            })}
        </div>
    );
};