import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../Firebase/actions";
import Navbar from "../Components/Navbar";

class Homes extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  };
  render() {
    const { isLoggingOut, logoutError } = this.props;
    return (
      <div className="isLogout">
        <h1>This is your app's protected area.</h1>
        <p>Any routes here will also be protected</p>
        <button className="logout" onClick={this.handleLogout}>Signout</button>
        {isLoggingOut && <p>Logging Out....</p>}
        {logoutError && <p>Error logging out</p>}
        <Navbar />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    isLoggingOut: state.auth.isLoggingOut,
    logoutError: state.auth.logoutError
  };
}
export default connect(mapStateToProps)(Homes);