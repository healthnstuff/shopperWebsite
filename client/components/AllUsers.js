import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from '../store/users'

class AllUsers extends React.Component {
    componentDidMount() {
        this.props.getUsers()
    }
    render () {
        return (
            <div>
                <div>
                    {this.props.users.map(user => {
                        return ( 
                            <div key={user.id}>
                                    <div>
                                        <p>First Name: {user.firstName}</p>
                                        <p>Last Name: {user.lastName}</p>
                                        <p>Email: {user.email}</p>
                                        <p>Phone Number: {user.phoneNum}</p>
                                    </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
      users: state.users
    };
  };
  
const mapDispatch = (dispatch) => {
    return {
      getUsers: () => dispatch(fetchUsers()),
    }
};
  
export default connect(mapState, mapDispatch)(AllUsers);