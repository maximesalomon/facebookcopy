import React, { useState } from "react";

import SignUp from './SignUp';
import SignIn from "./SignIn";


const HomeAuth = () => {
    const [isUser, setIsUser] = useState(false);
  return (
      !isUser ? <SignUp /> : <SignIn />
  );
};

export default HomeAuth;
