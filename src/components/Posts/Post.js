import React from "react";
import styled from "styled-components";

import PostContent from "./PostContent";
import PostProfile from "./PostProfile";

const PostContainer = styled.section`
  margin: 32px auto;
  width: 640px;
  background-color: white;
  border-radius: 8px;
`;

const Post = ({ post }) => {
  return (
    <PostContainer>
      <PostProfile post={post} />
      <PostContent post={post} />
    </PostContainer>
  );
};

export default Post;
