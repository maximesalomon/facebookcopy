import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createPost } from '../../store/actions/postActions';

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
    width: 464px;
    background-color: #F2F4F5;
    border: none;
    border-radius: 8px;
    margin-top: 16px;
    outline: none;
    ::placeholder {
        color: #3D4048;
        padding-left: 190px;
        font-size: 18px;
        font-weight: 800;
        font-family: 'Roboto';
    }
`

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
`

class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }
    }
    render() {

    const handleChange = (e) => {
        this.setState({
            text: e.target.value
          });
    }
    
    const handleSubmit = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            this.props.createPost(this.state)
        }
    }
        return (
            <AddPostContainer>
                <AddPostProfilePicture alt="tom-brady" src='./img/tom-brady-profile-picture.png'/>
                <form onKeyDown={handleSubmit}>
                    <AddPostInput placeholder='Add a post' value={this.text} onChange={e => handleChange(e)}/>
                </form>
                <AddPostAsset alt='Button to add asset' src='./img/desktop-upload-asset.png'/>
            </AddPostContainer>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (post) => dispatch(createPost(post))
    }
}

export default connect(null, mapDispatchToProps)(AddPost);