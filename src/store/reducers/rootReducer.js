import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

import authReducer from "./authReducer";
import postReducer from "./postReducer";
import notificationReducer from "./notificationReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  post: postReducer,
  notifiation: notificationReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
