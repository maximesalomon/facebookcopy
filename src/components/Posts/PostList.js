import React from 'react';

import Post from './Post';

const PostList = ({posts}) => {
  return (
   <>
    {
        posts && posts.map(post => {
            return (
                <Post key={post.id} post={post}/>
            )
        })
    }
   </>
  );
}

export default PostList;