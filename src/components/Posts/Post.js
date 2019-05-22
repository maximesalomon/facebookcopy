import React from 'react';
import styled from 'styled-components';

import PostContent from './PostContent';
import PostProfile from './PostProfile';

const PostContainer = styled.section`
    margin: 32px auto;
    width: 640px;
`

const Post = () => {
  return (
    <PostContainer>
        <PostProfile/>
        <PostContent/>
    </PostContainer>
  );
}

export default Post;