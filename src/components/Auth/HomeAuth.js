import React, { useState } from "react";
import styled from 'styled-components';

import SignUp from "./SignUp";
import SignIn from "./SignIn";

const HomeAuth = () => {
  const [isUser, setIsUser] = useState(false);
  return (
    <HomeContainer>
        <HomeBGImg src="https://images.unsplash.com/photo-1474674686577-219e8d77f55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"/>
        <HomeAuthContainer>
            <h1>Facebook <span role="img" aria-label="cat-emoji" alt="cat-emoji">🐈</span></h1>
            <p>Connect with friends and the world around you on Facebook.</p>
            {
                !isUser ? (
                    <>
                        <SignUp />
                        <p onClick={() => setIsUser(true)}>Already have an account?</p>
                    </>
                ) : 
                    <>
                        <SignIn />
                        <p onClick={() => setIsUser(false)}>I don't have an account</p>
                    </>
            }
        </HomeAuthContainer>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
`

const HomeBGImg = styled.img`
    height: 100vh;
    max-width: 70vw;
`

const HomeAuthContainer = styled.div`
    width: 24vw;
    margin: 160px 3vw;
`

export default HomeAuth;
