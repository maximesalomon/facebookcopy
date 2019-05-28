import React from "react";
import styled from "styled-components";

const AddFriendsStyle = styled.p`
  padding: 16px;
  margin: 10px;
  border: 1px solid lightgray;
  border-radius: 8px;
  font-family: "Lato";
`;

const AddFriends = ({ user }) => {
  return (
    <AddFriendsStyle>
      {user.firstname} {user.lastname}
    </AddFriendsStyle>
  );
};

export default AddFriends;
