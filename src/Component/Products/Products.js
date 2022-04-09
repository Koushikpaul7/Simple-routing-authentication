import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth= getAuth(app)
const Products = () => {
   const [user]=useAuthState(auth);
    return (
        <div>
            <h2>Knock Knock! who's there</h2>
            <h5>{user?user.displayName:'No-one'}</h5>
        </div>
    );
};

export default Products;