import { getAuth } from 'firebase/auth';
import React from 'react';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';
 const auth= getAuth()
const Login = () => {
    const [signInWithGoogle,user]=useSignInWithGoogle(auth);
    const location =useLocation();
    const navigate=useNavigate();
    const from =location?.state?.form?.pathname ||'/';
    const handleGoogleSignIn=()=>{signInWithGoogle()
    .then(()=>{
        navigate(from,{replace:true})
    })
    }
    return (
        <div>
            <h1>Login</h1>
            <div style={{margin:'20px'}}>
            <button  onClick={handleGoogleSignIn} >Google Sign in</button>
            </div>
            <form>
                <input type="email" placeholder='your email'/>
                <br />
                <input type="password" placeholder='enter password'/>
                <br />
                <input type="submit" value='Login' />
            </form>
        </div>
    );
};

export default Login;