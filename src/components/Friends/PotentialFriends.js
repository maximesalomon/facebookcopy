import React from "react";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import AddFriend from '../Friends/AddFriends';

const PotentialFriends = ({ users }) => {
  return (
    <>
      {users &&
        users.map(user => {
          return <AddFriend key={user.id} user={user} />;
        })}
    </>
  );
};

const mapStateToProps = state => {
  return {
    users: state.firestore.ordered.users
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "users" }
  ])
)(PotentialFriends);