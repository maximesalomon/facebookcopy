import React from "react";
import styled from "styled-components";

const PotentialFriendStyle = styled.p`
  padding: 16px;
  margin: 10px;
  border: 1px solid lightgray;
  border-radius: 8px;
  font-family: "Lato";
`;

const PotentialFriend = ({ friend, handleClick }) => {
  return (
    <PotentialFriendStyle onClick={() => handleClick(friend)}>
      {friend.firstname} {friend.lastname}
    </PotentialFriendStyle>
  );
};

export default PotentialFriend;
