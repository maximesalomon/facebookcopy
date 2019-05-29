export const addFriend = friends => {
    return (dispatch, getState, { getFirestore }) => {
        const userId = getState().firebase.auth.uid;
        const firestore = getFirestore();
      firestore
        .collection("users")
        .doc(userId)
        .update({
          friends: friends
        })
        .then(() =>
          dispatch({
            type: "ADD_FRIEND", friends
          })
        )
        .catch(err =>
          dispatch({
            type: "ADD_FRIEND_ERROR", err
          })
        );
    };
  };