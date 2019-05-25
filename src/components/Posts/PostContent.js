import React from 'react';
import styled from 'styled-components';

const PostText = styled.p`
    padding-top: 16px;
    padding-left: 24px;
    font-family: 'Roboto';
    color: #3D4048;
    font-size: 18px;
    padding-bottom: 24px;
`

// const PostAsset = styled.img`
//   width: 100%;
// `

const PostContent = ({post}) => {
  return (
    <>
        <PostText>{post.text}</PostText>
        {/* <PostAsset src='./img/brunch.png'/> */}
    </>
  );
}

export default PostContent;