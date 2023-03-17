import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase';

const Home = () => {
        const [user,loading] = useAuthState(auth);
    if(loading){
        return(
        <p
        className='w-screen h-screen flex items-center justify-center'
        >Loading.....</p>
        )
    }
    return (
        <div className='flex flex-col justify-center items-center text-center'>
            <h1 className='text-[40px]'>Hello Your auth Information</h1>
            {user && <div>
                <h1>User Uid:{user.uid}</h1>
                <h1>Display Name:{user.displayName}</h1>
                <h1>Your email:{user.email}</h1>
            </div>}
        </div>
    );
};

export default Home;