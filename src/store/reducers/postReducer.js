const initState = {
    posts: [
        { id: 1, text: "Sunday brunch" },
        { id: 2, text: "Superbowl champions!!!" },
        { id: 3, text: "It's time to say goodbye to this extraordiary place. So many memories were created here and so many friendships. Thanks Lambda!" },
        { id: 4, text: "Sunday brunch" },
        { id: 5, text: "Superbowl champions!!!" },
    ]
}

const postReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_POST':
            return state;
        break;
        default:
            return state;
    }
}

export default postReducer;
  