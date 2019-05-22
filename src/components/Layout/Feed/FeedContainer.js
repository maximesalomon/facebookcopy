import React from 'react';
import styled from 'styled-components';

import AddPost from '../../Posts/AddPost'
import Post from '../../Posts/Post'
import { bgColor } from '../../../shared/theme';

const FeedContainer = styled.div`
  @media (max-width: 768px) {
    margin-top: 104px;
  }
    position: fixed;
    z-index: -1;
    -webkit-flex: 1 1 auto;
    overflow-y: auto;
    background-color: ${bgColor};
    margin-top: 64px;
    height: 100%;
    width: 100%;
`

const Feed = () => {
  return (
    <FeedContainer>
      <AddPost/>
      <Post/>
      <Post/>
      <Post/>
    </FeedContainer>
  );
}

export default Feed;