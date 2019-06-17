import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { BrowserRouter as Router } from "react-router-dom";

import rootReducer from './store/reducers/rootReducer';
import App from './App';
import firebaseConfig from './config/firebaseConfig';

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({
            getFirebase,
            getFirestore
        })),
        reduxFirestore(firebaseConfig),
        reactReduxFirebase(firebaseConfig,
            {
                useFirestoreForProfile: true,
                userProfile: 'users',
                attachAuthIsReady: true
            }),
    )
);

store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>,
        document.getElementById('root')
    );
})