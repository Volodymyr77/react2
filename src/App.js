
import './App.css';
import Users from "./components/users/Users";
import React, {Component} from "react";
import {UserService} from "./services/UserService";
import User from "./components/user/User";


export class App extends Component {

  _userService = new UserService();
  state =  {
      userItems: [],
      item: null
  };

  async componentDidMount() {
    let users = await this._userService.getAllUsers();
    this.setState( () => {
      return {userItems: users};
    } );
  }

  getOneUserByIdApp = (id) => {
    let filter = this.state.userItems.filter(value => value.id === id);
    console.log(filter);
    this.setState({item: filter[0]});
  };

  render() {
    let {userItems} = this.state;

    console.log(userItems);
    let  {item} = this.state;

    return (
        <div>
            <Users
                items={userItems}
                getOneUserByIdUsers={this.getOneUserByIdApp} />

                <hr/>
          {
            item && (<User item={item}/>)
          }
        </div>
    );
  }
}
export default App;
