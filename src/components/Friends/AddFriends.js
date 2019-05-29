import React from "react";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import PotentialFriend from './PotentialFriend';

import { addFriend } from "../../store/actions/friendActions";

const AddFriends = ({ addFriend, users, id }) => {
  // const friends = []
  // console.log(users)
  // console.log(id)
  console.log(users)

  const handleClick = user => {
      // addFriend(user);
      console.log(user.friends)
  }
  const friends = []

  users && users.map(user => {
    if(user.id !== id) {
      return friends.push(user)
    }
  })

  console.log(friends)

  return (
    <>
      {friends &&
        friends.map(friend => {
          return <PotentialFriend key={friend.id} friend={friend} handleClick={handleClick} />
        })}
    </>
  );
}

const mapStateToProps = state => {
  return {
    users: state.firestore.ordered.users,
    id: state.firebase.auth.uid
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