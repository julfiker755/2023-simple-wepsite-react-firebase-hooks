import { async } from '@firebase/util';
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/Firebase';

const Login = () => {
    const [email,setemail]=useState('')
    const [pass,setpass]=useState('')
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const handlelogin=async(e)=>{
       e.preventDefault()
       await signInWithEmailAndPassword(email,pass)
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse w-[500px]">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
             <form onSubmit={handlelogin}>
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input onChange={(e)=>setemail(e.target.value)} type="text" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input onChange={(e)=>setpass(e.target.value)} type="text" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                <Link to="/register">Plase Register</Link>
              </div>    
            </form> 
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;