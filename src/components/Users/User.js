import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from 'redux';

const UserContainer = styled.section`
  margin: 32px auto;
  width: 640px;
  background-color: white;
  border-radius: 8px;
`;

const User = ({ user }) => {
    console.log(user);
    if(user) {
        return (
            <UserContainer>
                <h1>{user.firstname} {user.lastname}</h1>
            </UserContainer>
        )
    } return (
        <p></p>
    );
}


const mapStateToProps = (state, ownProps) => {
    const userId = ownProps.match.params.id;
    const users = state.firestore.data.users;
    const user = users ? users[userId] : null;
    return { user: user };
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'users' }
    ])
)(User)