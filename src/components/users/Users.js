import React, {Component} from 'react';
import User from "../user/User";

class Users extends Component {


    constructor(props) {
        super(props);

    }

    render() {

        let users = this.props.items;
        let oneUserByIdUsers = this.props.getOneUserByIdUsers;
        return (

                {
                    users.map(value =>
                        (<User
                                item={value}
                                key={value.id}
                                getOneUserByIdUser={oneUserByIdUsers}
                            />
                        ))
                }

        );
    }

}

export default Users;