import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { async } from '@firebase/util';

const SIgnUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()
    if (user) {
        navigate('/home')
    }
    const [updateProfile, updating] = useUpdateProfile(auth);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirm = e.target.confirm.value;
        if (password !== confirm) {
            return;
        }
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
    }

    return (
        <div>
            <div>
                <div className='flex justify-center mt-12 '>
                    <div>

                        <form onSubmit={handleSubmit} className='bg-white px-12 py-4 border-4 border-yellow-300 rounded-xl'>
                            <h1 className='mb-4'>Create Now Account</h1>
                            <input className='block bg-transparent border-b-4 w-[300px]' type="text" name="name" placeholder='Name' id="" required/>

                            <input className='block bg-transparent border-b-4 mt-4 w-[300px]' type="email" name="email" placeholder='Email' id="" required/>

                            <input className='block bg-transparent border-b-4  mt-4 w-[300px]' type="password" name="password" placeholder='Password' id="" />

                            <input className='block bg-transparent border-b-4  mt-4 w-[300px]' type="password" name="confirm" placeholder='confirm-Password' id="" required/>
                            <input className='block mb-6 bg-yellow-600 py-3  mt-6 w-[300px]' type="submit" name="submit" value='Create An Account' placeholder='confirm-Password' id="" required/>
                            <p className='text-center'>Already Have An Account? <Link className='text-blue-700 underline' to='/login'>Login</Link></p>
                        </form>
                        <div className='mt-12 w-[400px] items-center flex justify-center'>
                            <hr className='w-[200px]' />
                            <p className='mx-4 text-white font-bold'>or</p>
                            <hr className='w-[200px]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SIgnUp;