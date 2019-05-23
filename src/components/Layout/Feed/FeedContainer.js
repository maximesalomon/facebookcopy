import React, { Component } from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import AddPost from '../../Posts/AddPost'
import PostList from '../../Posts/PostList';

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

class Feed extends Component {
  render() {
    const {posts} = this.props;
    return (
      <FeedContainer>
        <AddPost/>
        <PostList posts={posts}/>
      </FeedContainer>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.post.posts);
  console.log(state.firestore.ordered.posts);
  if(state.firestore.ordered.posts) {
    return { posts: state.firestore.ordered.posts }
  } else return { posts: state.post.posts }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'posts' }
  ])
)(Feed);