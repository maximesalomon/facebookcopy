import { combineReducers } from 'redux';

import authReducer from './authReducer';
import postReducer from './postReducer';

const rootRducer = combineReducers({
    auth: authReducer,
    post: postReducer,
})

export default rootRducer;
