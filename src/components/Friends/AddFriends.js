import React from "react";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import PotentialFriend from './PotentialFriend';

import { addFriend } from "../../store/actions/friendActions";

const AddFriends = ({ addFriend, users }) => {
  const handleClick = user => {
      addFriend(user);
      console.log(user)
  }
  return (
    <>
      {users &&
        users.map(user => {
          return <PotentialFriend key={user.id} user={user} handleClick={handleClick} />;
        })}
    </>
  );
}

const mapStateToProps = state => {
  return {
    users: state.firestore.ordered.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addFriend: friend => dispatch(addFriend(friend))
  };
};

export default compose(
connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: "users" }
  ])
)(AddFriends);