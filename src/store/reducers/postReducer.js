const postReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_POST":
      return state;
    case "ADD_POST_ERROR":
      return state;
    case "EDIT_POST":
      return state;
    case "EDIT_POST_ERROR":
      return state;
    case "DELETE_POST":
      return state;
    case "DELETE_POST_ERROR":
      return state;
    default:
      return state;
  }
};

export default postReducer;