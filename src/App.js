
import './App.css';
import Users from "./components/users/Users";
import React, {Component} from "react";
import {UserService} from "./services/UserService";


export class App extends Component {

  _userService = new UserService();
  state = {items: [],
  };
  getOneUserById;

  async componentDidMount() {
    let users = await this._userService.getAllUsers();
    this.setState( () => {
      return {userItems: users};
    } );
  }

  getOneUserByIdApp = (id) => {
    let filter = this.state.userItems.filter(value => value.id === id);
    console.log(filter);
  };

  render() {
    let {userItems} = this.state;

    console.log(userItems);

    return (
        <div>

            <Users
                items={userItems}
                getOneUserByIdUsers={this.getOneUserByIdApp} />

        </div>
    );
  }
}
export default App;
