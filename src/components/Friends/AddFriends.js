import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import PotentialFriend from './PotentialFriend';

import { addFriend } from "../../store/actions/friendActions";

const AddFriends = ({ addFriend, users, id }) => {
  const [addToFriends, setAddToFriends] = useState([])


  const handleClick = user => {
      setAddToFriends([...addToFriends, user.id])
  }

  // await users && users.forEach(user => {
  //   if(id === user.id) {
  //     const friends = user.friends;
  //     // return setAddToFriends([friends])
  //     return setAddToFriends([user.friends])
  //   } return null
  // })

  // users && users.map(user => {
  //   if(id === user.id) {
  //     const friends = user.friends
  //     console.log(friends)
  //     return setAddToFriends(friends)
  //   } else return null;
  // })

  console.log(addToFriends)

  // users && users.friends && users.map(user => {
  //   if(users.id === id) {
  //     return setAddToFriends(users.friends)
  //   } return null
  // })

  const potentialFriends = []

  users && users.map(user => {
    if(user.id !== id) {
      return potentialFriends.push(user)
    }
  })

  return (
    <>
      {potentialFriends &&
        potentialFriends.map(potentialFriend => {
          return <PotentialFriend key={potentialFriend.id} potentialFriend={potentialFriend} handleClick={handleClick} />
        })}
      <button>Add Friend</button>
    </>
  );
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    users: state.firestore.ordered.users,
    id: state.firebase.auth.uid,
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

// const mapStateToProps = (state, ownProps) => {
//   const userId = ownProps.match.params.id;
//   const users = state.firestore.data.users;
//   const user = users ? users[userId] : null;
//   return { user: user };
// }

// export default compose(
//   connect(mapStateToProps),
//   firestoreConnect([
//       { collection: 'users' }
//   ])
// )(User)