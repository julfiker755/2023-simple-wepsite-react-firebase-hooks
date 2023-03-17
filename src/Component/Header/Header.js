import React from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/Firebase';

const Header = () => {
  const [user]=useAuthState(auth)
  const [signOut] = useSignOut(auth);
    return (
        <div className="navbar bg-[green] flex justify-center">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 items-center space-x-2">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/order">Order</Link></li>
            <li>{user ? <button onClick={async()=>{
               await signOut()
            }} className='bg-[red] text-white'>Log out</button>:<Link to="/login">Login</Link>}</li>
            <li>{user && user.email}</li>
          </ul>
        </div>
      </div>
    );
};

export default Header;