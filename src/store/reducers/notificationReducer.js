const notificationReducer = (state = {}, action) => {
    switch (action.type) {
      case "DELETE_NOTIFICATION":
        return state;
      case "DELETE_NOTIFICATION_ERROR":
        return state;
      default:
        return state;
    }
  };
  
  export default notificationReducer;