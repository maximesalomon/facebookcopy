export const addFriend = friend => {
    return (dispatch, getState, { getFirestore }) => {
        const userId = getState().firebase.auth.uid;
        const firestore = getFirestore();
      firestore
        .collection("users")
        .doc(userId)
        .update({
          friends: friend.id
        })
        .then(() =>
          dispatch({
            type: "ADD_FRIEND", friend
          })
        )
        .catch(err =>
          dispatch({
            type: "ADD_FRIEND_ERROR", err
          })
        );
    };
  };