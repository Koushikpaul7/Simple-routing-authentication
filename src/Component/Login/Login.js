import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle}=useFirebase();
    return (
        <div>
            <h1>Login</h1>
            <div style={{margin:'20px'}}>
            <button  onClick={signInWithGoogle} >Google Sign in</button>
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