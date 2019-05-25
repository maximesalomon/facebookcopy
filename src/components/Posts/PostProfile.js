import React from "react";
import styled from "styled-components";
import moment from "moment";

const tom =
  "https://firebasestorage.googleapis.com/v0/b/facebook-a5382.appspot.com/o/tom-brady-profile-picture.png?alt=media&token=f27b7bf1-5ac5-482d-98b8-799d7ea72522";

const PostProfile = props => {
  const { authorFirstName, authorLastName } = props.post;
  return (
    <PostProfileContainer>
      <img alt="tom-brady" src={tom} />
      <PostProfileInfos>
        <PostProfileUserName>
          {authorFirstName} {authorLastName}
        </PostProfileUserName>
        <PostDetails>
          {moment(props.post.createdAt.toDate()).fromNow()}
        </PostDetails>
      </PostProfileInfos>
      {/* <PostSettings src="./img/post-dots.png"/> */}
    </PostProfileContainer>
  );
};

const PostProfileContainer = styled.div`
  display: flex;
  background-color: white;
  border-radius: 8px 8px 0px 0px;
  height: 50px;
  padding: 24px 24px 0px 24px;
`;

const PostProfileInfos = styled.div`
  display: block;
  margin-left: 16px;
  margin-top: 6px;
`;
const PostProfileUserName = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: 800;
  font-family: "Roboto";
  color: #3d4048;
`;

const PostDetails = styled.p`
  font-size: 14px;
  font-weight: 400;
  font-family: "Roboto";
  color: #c4c4c4;
  margin-top: 2px;
  a:link {
    text-decoration: none;
  }
  a:visited {
    color: #c4c4c4;
  }
`;
// const PostSettings = styled.img`
//   right: 10px;
//   margin-top: 14px;
//   width: 20px;
//   height: 6px;
// `

export default PostProfile;
