import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

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
    a:link {
      text-decoration: none;
    }
    a:visited {
      color: #C4C4C4;
    }
`
const PostSettings = styled.img`
  margin-top: 14px;
  margin-left: 410px;
  width: 20px;
  height: 6px;
`

const PostProfile = () => {
  return (
    <PostProfileContainer>
        <img alt="tom-brady" src="./img/tom-brady-profile-picture.png"/>
        <PostProfileInfos>
          <PostProfileUserName>Tom Brady</PostProfileUserName>
          <PostDetails><Link to='/posts/1'>7 min</Link></PostDetails>
        </PostProfileInfos>
        <PostSettings src="./img/post-dots.png"/>
    </PostProfileContainer>
  );
}

export default PostProfile;