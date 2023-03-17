import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase';

const Private = ({children}) => {
    const [user,loading]=useAuthState(auth)
    if(loading) {
        return <div>Loading...</div>
    }
    if(user && user.uid){
        return children
    }
    return <Navigate to="/login"></Navigate>
};

export default Private;