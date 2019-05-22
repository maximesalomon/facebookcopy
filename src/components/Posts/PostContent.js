import React from 'react';
import styled from 'styled-components';

const PostContentContainer = styled.div`
    background-color: lightgray;
    height: 400px;
    width: 100%;
    padding-top: 16px;
`

const PostText = styled.div`
    
`

const PostAsset = styled.div`

`

const PostContent = () => {
  return (
    <PostContentContainer>
        <PostText/>
        <PostAsset/>
    </PostContentContainer>
  );
}

export default PostContent;