import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext.js';

const Signin = ({ updateUserEmail }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { signIn } = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await signIn(email, password);           
            updateUserEmail(email);
            navigate('/account');
        } catch (e) {
            setError('Invalid email or password.');
        }
    };

    return (
    <div className = 'max-w-[700px] mx-auto my-16 p-4 bg-white border-black border-4 rounded'>
       <div>
        <h1 className = 'text-2xl font-bold py-2 text-black'>Sign in to your account</h1>
        <p className = 'py-2'>
            Don't have an account yet? <Link to='/signup' className = 'underline text-black'>Sign up.</Link> 
        </p>
        </div> 
        <form onSubmit = {handleSubmit}>
            <div className='flex flex-col py-2'>
                <label className= 'py-2 font-medium'>Email Address</label>
                <input onChange = {(e) => setEmail(e.target.value)} className= 'w-full border p-3' type ="email" />
            </div>
            <div className='flex flex-col py-2'>
                <label className= 'py-2 font-medium'>Password</label>
                <input onChange = {(e) => setPassword(e.target.value)} className= 'w-full border p-3' type ="password" />
            </div>
            <div>
                {error && <div className="e"> {error}</div>}
            </div>
            <button className = 'border border-purple-500 bg-purple-600 hover:bg-purple-500 w-full p-4 my-2 text-white'>Sign in</button>
        </form>
    </div>
    )
}
export default Signin;