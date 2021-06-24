import React, { Component } from "react";
import { connect } from "react-redux";
import { _getSingleUser } from "../store/users";

class SingleUser extends Component {
  componentDidMount() {
    let idParam = this.props.match.path.split("/")
    let idParams = idParam[idParam.length - 1]
    console.log("params", idParams )
    this.props.loadUser(idParams);
  }
  render() {
    console.log("user props", this.props.user)
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

const mapDispatch = (dispatch) => {
  return {
    loadUser: (id) => dispatch(_getSingleUser(id))
  }
};

export default connect(mapState, mapDispatch)(SingleUser);
