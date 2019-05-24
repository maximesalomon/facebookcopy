export const createPost = post => (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('posts').add({
        ...post,
        userID: 1,
        createdAt: new Date()
    }).then(() => dispatch({
        type: 'ADD_POST',
        post,
      })).catch(err => dispatch({
        type: 'ADD_POST_ERROR',
        err,
      }));
};
