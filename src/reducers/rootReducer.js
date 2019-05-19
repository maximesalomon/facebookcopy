import { combineReducers } from 'redux';

import authReducer from './authReducer';

const rootRducer = combineReducers({
    auth: authReducer
})

export default rootRducer;
