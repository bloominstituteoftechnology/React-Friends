import React from 'react';

const PeopleList= props => {
    const { people } = props;
    return (
        <div>
            {props.people.map(item => {
                return (
                    <div>
                        <ul style={{listStylePosition: 'outside'}}>
                            <li>{item.first_name}</li>
                            <li>{item.last_name}</li>
                            <li>{item.email}</li>
                        </ul>
                    </div>
                );
            })};
        </div>
    );
};

export default PeopleList;