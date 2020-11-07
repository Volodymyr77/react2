import React, {Component} from 'react';
import User from "../user/User";

class Users extends Component {


    constructor(props) {
        super(props);
    }

    render() {

        console.log(this.props, '!!!!')
        let users = this.props.items;
        let oneUserByIdUsers = this.props.getOneUserByIdUsers;
        return (

            <div>
                {
                    users.map(value =>
                        (<User
                                item={value}
                                key={value.id}
                                getOneUserByIdUser={oneUserByIdUsers}
                            />
                        ))
                }
            </div>
        );
    }
}

export default Users;