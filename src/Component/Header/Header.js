import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './Header.css'
const Header = () => {
    const {user,handleSignOut}=useFirebase();
    return (
        <div className='header'>
           <nav>
           <Link to='/'>Home</Link>
            <Link to='/register'>register</Link>
            <Link to='/products'>Products</Link>
            <Link to='/reviews'>reviews</Link>
            <span>{user?.displayName && user.displayName}</span>
            {
                user?.uid? 
                <button onClick={handleSignOut}>Signout</button>:
                <Link to='/login'>Login</Link>
                
            }
           </nav>
        </div>
    );
};

export default Header;