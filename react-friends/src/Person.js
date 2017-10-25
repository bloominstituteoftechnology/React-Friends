export default class Person extends Component {
  constructor(props) {
    super(props) {
      this.state = {
        person: {},
      };
    }
  }
  componentDidMount() {
    this.setState({ person: this.props.person });
  }
  render() {
    return (
      <div> {this.state.person.first_name} </div>
      <div> {this.state.person.last_name} </div>
      <div> {this.state.person.email} </div>
    )
  }
}