import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const navigate = useNavigate();
      if(user){
          navigate('/home')
      }
      const [signInWithGoogle] = useSignInWithGoogle(auth);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email,password)
    }
    return (
        <div>
          <div>
            <div>
                <div className='flex justify-center mt-12 '>
                    <div>

                        <form onSubmit={handleSubmit} className='bg-white px-12 py-4 border-4 border-yellow-300 rounded-xl'>
                            <h1 className='mb-4'>Login</h1>
                            <input className='block bg-transparent border-b-4 mt-4 w-[300px]' type="email" name="email" placeholder='Email' id="" required/>

                            <input className='block bg-transparent border-b-4  mt-4 w-[300px]' type="password" name="password" placeholder='Password' id="" />

                            <input className='block mb-6 bg-yellow-600 py-3  mt-6 w-[300px]' type="submit" name="submit" value='Login' placeholder='confirm-Password' id="" required/>
                            <p className='text-center'>Don't have An Account? <Link className='text-blue-700 underline' to='/signup'>Create account</Link></p>
                        </form>
                        <div className='mt-12 w-[400px] items-center flex justify-center'>
                            <hr className='w-[200px]' />
                            <p className='mx-4 text-white font-bold'>or</p>
                            <hr className='w-[200px]' />
                        </div>
                        <button onClick={()=>signInWithGoogle()} className='text-white border p-2'> <img className='rounded-full inline' width={60} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU93LhrAAjJTQEX6Ku6VBhDHHrbJUnFMjvwXoMKIPZp6UIsfRKWuYoM-jv4gQFIcbV-FQ&usqp=CAU" alt="" /> Google Sign In</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;