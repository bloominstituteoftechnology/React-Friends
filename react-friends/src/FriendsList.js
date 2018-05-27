import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class FriendsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showFriends: false };
    }

    handleShow = () => {
        this.setState({ showFriends: !this.state.showFriends });
    }
    
    render() {
        return (
            <Dropdown isOpen={this.state.showFriends} toggle={this.handleShow}>
                <DropdownToggle caret>Friends</DropdownToggle>
                <DropdownMenu>
                    {this.props.friends.map(friend => (
                        <DropdownItem key={friend.firstName + friend.lastName}>
                            {`${friend.firstName} ${friend.lastName}`}
                        </DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>
        );
    }
}

export default FriendsList;