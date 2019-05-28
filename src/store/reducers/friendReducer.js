const friendReducer = (state = {}, action) => {
    switch (action.type) {
      case "ADD_FRIEND":
        return state;
      case "ADD_FRIEND_ERROR":
        return state;
      default:
        return state;
    }
  };
  
  export default friendReducer;