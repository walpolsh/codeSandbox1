import React from "react";
import axios from "axios";

const capitalize = ([first, ...rest], lowerRest = false) =>
  first.toUpperCase() +
  (lowerRest ? rest.join("").toLowerCase() : rest.join(""));

export default class OldSchool extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?results=10")
      .then(json =>
        json.data.results.map(result => ({
          name: `${result.name.title} ${result.name.first} ${result.name.last}`,
          age: `${result.dob.age}`,
          pic: result.picture.large
        }))
      )
      .then(newData => this.setState({ users: newData }))
      .catch(error => alert(error));
  }

  render() {
    console.log(this.state.users);
    const { users } = this.state;
    return (
      <ul>
        {users.map(x => (
          <div>
            <div>{x.name}</div>
            <div>{x.age}</div>
            <img key={x.pic} src={x.pic} />
          </div>
        ))}
      </ul>
    );
  }
}
