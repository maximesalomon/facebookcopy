import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { editPost } from "../../store/actions/postActions";

const PostContent = props => {
  const { authorId, text, id } = props.post;
  const [content, setContent] = useState({
    id: id,
    text: text,
    editing: false,
  });

  console.log(content)

  const handleChange = (e) => {
    console.log(e.target.value)
    setContent({ ...content, text: e.target.value })
  }

  const handleSubmit = e => {
      if (e.key === 'Enter') {
        console.log(content)
        e.preventDefault();
        props.editPost(content);
        setContent({ ...content, editing: false});
      }
  };

  return (
    <>
    {
      content.editing === false
      ? <PostText onClick={() => authorId === props.uid ? setContent({ ...content, editing: true }) : null}>{text}</PostText>
      : <Edit><EditInput onKeyDown={handleSubmit} onChange={handleChange} value={content.text}/><EditClose onClick={() => setContent({ ...content, editing: false })}>X</EditClose></Edit>
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

const mapStateToProps = state => {
  return {
    uid: state.firebase.auth.uid
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editPost: post => dispatch(editPost(post))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostContent);
