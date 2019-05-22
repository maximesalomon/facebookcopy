import React from 'react';
import styled from 'styled-components';


const AddPostContainer = styled.div`
    margin: 32px auto;
    width: 640px;
    height: 80px;
    background-color: white;
    border-radius: 8px;
    display: flex;
`

const AddPostProfilePicture = styled.img`
    margin: 16px 20px;
`

const AddPostInput = styled.input`
    height: 48px;
    width: 480px;
    background-color: #F2F4F5;
    border: none;
    border-radius: 8px;
    margin-top: 16px;
    outline: none;
    ::placeholder {
        color: #3D4048;
        padding-left: 192px;
        font-size: 18px;
        font-weight: 800;
        font-family: 'Roboto';
    }
`

const AddPost = () => {
  return (
    <AddPostContainer>
        <AddPostProfilePicture alt="tom-brady" src='./img/tom-brady-profile-picture.png'/>
        <AddPostInput placeholder='Add a post'/>
    </AddPostContainer>
  );
}

export default AddPost;