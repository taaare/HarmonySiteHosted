import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext.js';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { createUser } = UserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await createUser(email, password);
            alert('Account created, please sign in.')
            navigate('/'); 
        } catch (e) {
            setError(e.message);
            console.log(e.message);
        }
    };

    return (
    <div className = 'max-w-[700px] mx-auto my-16 p-4 bg-white border-black border-4 rounded'>
       <div>
        <h1 className = 'text-2xl font-bold py-2 text-black'>Sign up for an account</h1>
        <p className = 'py-2'>
            Already have an account yet? <Link to='/' className = 'underline text-black'>Sign in.</Link> 
        </p>
        </div> 
        <form onSubmit = {handleSubmit}>
            <div className='flex flex-col py-2'>
                <label className= 'py-2 font-medium'>Email Address</label>
                <input onChange={(e) => setEmail(e.target.value)} className= 'w-full border p-3' type ="email" />
            </div>
            <div className='flex flex-col py-2'>
                <label className= 'py-2 font-medium'>Password</label>
                <input onChange={(e) => setPassword(e.target.value)} className= 'w-full border p-3' type ="password" />
            </div>
            <button className = 'border border-purple-500 bg-purple-600 hover:bg-purple-500 w-full p-4 my-2 text-white'>Sign Up</button>
        </form>
    </div>
    );
};
export default Signup;