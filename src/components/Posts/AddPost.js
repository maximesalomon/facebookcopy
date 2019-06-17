import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { createPost } from "../../store/actions/postActions";

const AddPost = (props) => {

  const [post, setPost] = useState({
    text: '',
  })

  const handleChange = e => {
    setPost({ ...post, text: e.target.value });
    console.log(post.text)
  };

  const handleSubmit = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      props.createPost(post)
    }
  };

  const resetName = () => {
    setPost({ ...post, text: 'ghj' });
    alert(post.text)
    
  };

  return (
    <AddPostContainer>
      <AddPostProfilePicture
        alt="tom-brady"
        src="./img/tom-brady-profile-picture.png"
      />
      <form onKeyDown={handleSubmit}>
        <AddPostInput
          placeholder="Add a post"
          onfocus=""
          value={props.text}
          onChange={e => handleChange(e)}
        />
      </form>
      <AddPostAsset
        alt="Button to add asset"
        src="./img/desktop-upload-asset.png"
      />
    </AddPostContainer>
  );
}

const AddPostContainer = styled.div`
  margin: 32px auto;
  width: 640px;
  height: 80px;
  background-color: white;
  border-radius: 8px;
  display: flex;
`;

const AddPostProfilePicture = styled.img`
  margin: 16px 20px;
`;

const AddPostInput = styled.input`
  height: 48px;
  width: 464px;
  background-color: #f2f4f5;
  border: none;
  border-radius: 8px;
  margin-top: 16px;
  outline: none;
  ::placeholder {
    color: #3d4048;
    padding-left: 190px;
    font-size: 18px;
    font-weight: 800;
    font-family: "Roboto";
  }
`;

const AddPostAsset = styled.img`
  height: 50px;
  width: 50px;
  margin-top: 16px;
  margin-left: 16px;
  border-radius: 100px;
  &:hover {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  }
  &:active {
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const mapDispatchToProps = dispatch => {
  return {
    createPost: post => dispatch(createPost(post))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddPost);
