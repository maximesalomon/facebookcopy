const initState = {
    posts: [
        { id: 1, text: "Sunday brunch" },
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
  