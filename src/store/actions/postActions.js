export const createPost = post => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("posts")
      .add({
        ...post,
        authorFirstName: profile.firstname,
        authorLastName: profile.lastname,
        authordId: authorId,
        createdAt: new Date()
      })
      .then(() =>
        dispatch({
          type: "ADD_POST", post
        })
      )
      .catch(err =>
        dispatch({
          type: "ADD_POST_ERROR", err
        })
      );
  };
};

export const deletePost = postId => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("posts")
      .doc(postId)
      .delete()
      .then(() =>
        dispatch({
          type: "DELETE_POST", postId
        })
      )
      .catch(err =>
        dispatch({
          type: "DELETE_POST_ERROR", err
        })
      );
  };
};
