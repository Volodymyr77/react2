import React, {Component} from 'react';
import {UserService} from "../../services/UserService";
import {User} from "../user/User";

class Users extends Component {
    _userService = new UserService();
    state = {users: []};

    async componentDidMount() {
        let users = await this._userService.getAllUsers();
        this.setState({users});
    }

    render() {

        return (
            <div>
                {
                    this.state.users.map(value => (<User item={value} key={value.id}/>))
                }
                </div>
        );
    }
}

export default Users;