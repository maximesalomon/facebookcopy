import React from 'react';
import styled from 'styled-components';

const PostText = styled.p`
    padding-top: 16px;
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
    <>
        <PostText>Sunday brunch 🙈</PostText>
        <PostAsset src='./img/brunch.png'/>
    </>
  );
}

export default PostContent;