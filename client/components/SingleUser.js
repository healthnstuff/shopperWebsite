import React, { Component } from "react";
import { connect } from "react-redux";
import { _getSingleUser } from "../store/users";

class SingleUser extends Component {
  componentDidMount() {
    this.props.loadUser(this.props.match.params.id);
  }
  render() {
    const { user } = this.props;
    return (
      <div>
        {user.id ? (
          <div>
            <p>{user.id}</p>
            <p>{user.firstName + " " + user.lastName}</p>
            <p>{user.email}</p>
            <p>{user.phoneNum}</p>
            <p>{`Admin? ${user.isAdmin}`}</p>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

const mapState = (state) => ({
  user: state.users,
});

const mapDispatch = (dispatch) => ({
  loadUser: (id) => dispatch(_getSingleUser(id)),
});

export default connect(mapState, mapDispatch)(SingleUser);
