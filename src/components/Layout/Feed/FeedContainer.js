import React from 'react';
import styled from 'styled-components';

import { bgColor } from '../../../shared/theme';

const FeedContainer = styled.div`
    position: absolute;
    background-color: ${bgColor};
    margin-top: 64px;
    height: calc(100% - 64px);
    width: 100%;
`

const Feed = () => {
  return (
    <FeedContainer/>
  );
}

export default Feed;
