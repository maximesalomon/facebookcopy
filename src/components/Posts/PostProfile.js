import React from "react";
import styled from "styled-components";
import moment from "moment";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import { deletePost } from "../../store/actions/postActions";

const tom =
  "https://firebasestorage.googleapis.com/v0/b/facebook-a5382.appspot.com/o/tom-brady-profile-picture.png?alt=media&token=f27b7bf1-5ac5-482d-98b8-799d7ea72522";

const PostProfile = props => {
  const { authorId, authorFirstName, authorLastName, id } = props.post;

  const deletePost = (postId) => {
    props.deletePost(postId);
  }

  return (
    <PostProfileContainer>
      <img alt="tom-brady" src={tom} />
      <PostProfileInfos>
        <PostProfileUserName>
          <Link to={`/users/${authorId}`}>{authorFirstName} {authorLastName}</Link>
        </PostProfileUserName>
        <PostDetails>
          {moment(props.post.createdAt.toDate()).fromNow()}
        </PostDetails>
      </PostProfileInfos>
      {
        (authorId === props.uid)
        ? <PostSettings onClick={() => deletePost(id)} src="./img/post-dots.png"/>
        : <PostSettings src="./img/post-dots.png"/>
      }
    </PostProfileContainer>
  );
};

PostProfile.propTypes = {
  authorFirstName: PropTypes.string,
  authorLastName: PropTypes.string,
};

const PostProfileContainer = styled.div`
  position: relative;
  display: flex;
  background-color: white;
  border-radius: 8px 8px 0px 0px;
  height: 50px;
  padding: 24px 24px 0px 24px;
`;

const PostProfileInfos = styled.div`
  display: block;
  margin-left: 16px;
  margin-top: 6px;
`;
const PostProfileUserName = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: 800;
  font-family: "Roboto";
  color: #3d4048;
`;

const PostDetails = styled.p`
  font-size: 14px;
  font-weight: 400;
  font-family: "Roboto";
  color: #c4c4c4;
  margin-top: 2px;
  a:link {
    text-decoration: none;
  }
  a:visited {
    color: #c4c4c4;
  }
`;

const PostSettings = styled.img`
  position: absolute;
  right: 24px;
  margin-top: 14px;
  width: 20px;
  height: 6px;
`;

const mapStateToProps = state => {
  return {
    uid: state.firebase.auth.uid
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deletePost: postId => dispatch(deletePost(postId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostProfile);
