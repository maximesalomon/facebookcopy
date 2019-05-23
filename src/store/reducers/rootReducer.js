import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

import postReducer from './postReducer';
import authReducer from './authReducer';

const rootRducer = combineReducers({
    auth: authReducer,
    post: postReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootRducer;