import React from 'react';
import styled from 'styled-components';

const PostContentContainer = styled.div`
    height: 400px;
    width: 100%;
    padding-top: 16px;
`

const PostText = styled.p`
    padding-left: 24px;
    font-family: 'Roboto';
    color: #3D4048;
    font-size: 18px;
`

const PostAsset = styled.img`
  margin-top: 16px;
  width: 100%;
`

const PostContent = () => {
  return (
    <PostContentContainer>
        <PostText>Sunday brunch 🙈</PostText>
        <PostAsset src='./img/brunch.png'/>
    </PostContentContainer>
  );
}

export default PostContent;