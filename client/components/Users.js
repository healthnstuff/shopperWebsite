import React, { Component } from "react";
import { connect } from "react-redux";
import { _getUsers } from "../store/users";
import { Link } from "react-router-dom";

class Users extends Component {
  componentDidMount() {
    this.props.loadUsers();
  }
  render() {
    const { users } = this.props;
    return (
      <div>
        {users.length ? (
          users.map((user) => {
            return (
              <div key={user.id}>
                <Link to={`/users/${user.id}`}>
                  <p>{user.firstName + " " + user.lastName}</p>
                  <p>{user.email}</p>
                  <p>{user.phoneNum}</p>
                </Link>
              </div>
            );
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

const mapState = (state) => ({
  users: state.users,
});

const mapDispatch = (dispatch) => ({
  loadUsers: () => dispatch(_getUsers()),
});

export default connect(mapState, mapDispatch)(Users);
