export const createPost = (post) => (dispatch, getState) => {
    // make asyc call to firebase
    dispatch({ type: 'ADD_POST', post});
};
