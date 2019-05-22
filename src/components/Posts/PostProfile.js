import React from 'react';
import styled from 'styled-components';

const PostProfileContainer = styled.div`
    display: flex;
    background-color: white;
    border-radius: 8px 8px 0px 0px;
    height: 50px;
    padding: 24px 24px 0px 24px;
`

const PostProfileInfos = styled.div`
    display: block;
    margin-left: 16px;
    margin-top: 6px;
`
const PostProfileUserName = styled.p`
    font-size: 20px;
    font-weight: 800;
    font-family: 'Roboto';
    color: #3D4048;
`

const PostDetails = styled.p`
    font-size: 14px;
    font-weight: 400;
    font-family: 'Roboto';
    color: #C4C4C4;
    margin-top: 2px;
`

const PostProfile = () => {
  return (
    <PostProfileContainer>
        <img alt="tom-brady" src="./img/tom-brady-profile-picture.png"/>
        <PostProfileInfos>
          <PostProfileUserName>Tom Brady</PostProfileUserName>
          <PostDetails>7 min</PostDetails>
        </PostProfileInfos>
        
    </PostProfileContainer>
  );
}

export default PostProfile;