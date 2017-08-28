import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {},
      active: false,
    }
    this.clickHandle = this.clickHandle.bind(this);
  }
  componentDidMount() {
      this.setState({person: this.props.person})
  }
  clickHandle(e) {
    e.preventDefault();
    this.state.active ? this.setState({active: false}) : this.setState({active: true})
  }
  render(props) {
      return (
        <li >
            <div className="full-name" onClick={this.clickHandle}>
            <div className="name">{this.state.person.first_name}</div>
            <div className="name">{this.state.person.last_name}</div>
            <div className={this.state.active ? 'shown' : 'hidden'}>{this.state.person.email}</div>
            </div>
        </li>
      )
  }
}