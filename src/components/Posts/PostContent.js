import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { editPost } from "../../store/actions/postActions";

const PostContent = ({ editPost, post}) => {
  const {text, id} = post;
  const [content, setContent] = useState({
    id: id,
    text: text,
    editing: false,
  })

  const handleChange = (e) => {
    setContent({ ...content, text: e.target.value })
  }

  const handleSubmit = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      editPost(content);
      setContent({ ...content, editing: false});
    }
  };

  return (
    <>
    {
      content.editing === false
      ? <PostText onClick={() => setContent({ ...content, editing: true })}>{text}</PostText>
      : <Edit>
          <EditInput onKeyDown={handleSubmit} onChange={handleChange} value={content.text}/>
          <EditClose onClick={() => setContent({ ...content, editing: false })}>X</EditClose>
        </Edit>
    }
      {/* <PostText onClick={() => editPost(content)}>{text}</PostText> */}
      {/* <PostAsset src='./img/brunch.png'/> */}
    </>
  );
};

const PostText = styled.p`
  margin-top: 16px;
  margin-left: 24px;
  font-family: "Roboto";
  color: #3d4048;
  font-size: 18px;
  padding-bottom: 24px;
`;

const Edit = styled.div`
  display: flex;
`;

const EditInput = styled.input`
  margin-top: 16px;
  margin-left: 24px;
  margin-bottom: 24px;
  height: 30px;
  width: 200px;
`;

const EditClose = styled.div`
  margin-top: 16px;
  margin-left: 16px;
  margin-bottom: 24px;
`;

// const PostAsset = styled.img`
//   width: 100%;
// `

const mapDispatchToProps = dispatch => {
  return {
    editPost: post => dispatch(editPost(post))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(PostContent);
