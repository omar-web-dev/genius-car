import React, { useContext, useState } from 'react';
import { FaFacebookF, FaGofore, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Login = () => {
    const {createUserEmailPassword } = useContext(AuthContext)
    const [error, setError] = useState('')
    
    const handelUserRegistration = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        
        createUserEmailPassword(email, password)
        .then((currentUser) => {
            // Signed in 
            const users = currentUser.user;
            console.log(users)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
          });
    }
    console.log(error)
    return (
        <div className='max-w-[1440px] mx-auto'>
            <div className=" min-h-screen">
                <div className="flex justify-center items-center">
                    <div className='md:flex hidden justify-end '>
                        <img className='px-10 h-full' src="https://i.ibb.co/9N5gPRD/login1.png" alt="logo" />
                    </div>
                    <form onSubmit={handelUserRegistration} className=' md:w-1/2'>
                        <div className='border p-5 w-[611px]'>
                            <div className="text-center lg:text-left">
                                {error && 
                                    <p className='text-red-500'>{error}</p>
                                }
                                <h1 className="text-4xl text-center font-semi-bold ">Resignation</h1>
                            </div>
                            <div className="card flex-shrink-0 ">
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name='name' placeholder="name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Confirm Password</span>
                                        </label>
                                        <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button type='submit' className="btn btn-error">Login</button>
                                    </div>
                                    <div>
                                        <p className='text-xl my-5 text-center'>Or Sign In with</p>
                                    </div>
                                    <div className='mx-auto'>
                                        <div className='flex'>
                                            <FaFacebookF className='mx-5 p-[8px] h-10 w-10 text-blue-400 bg-slate-200 rounded-full' />
                                            <FaLinkedinIn className='mx-5 p-[8px] h-10 w-10 text-blue-400 bg-slate-200 rounded-full' />
                                            <FaGofore className='p-[8px] mx-5 h-10 w-10 text-blue-400 bg-slate-200 rounded-full' />
                                        </div>
                                    </div>
                                    <div className='text-center text-xl mt-5'>
                                        <span className='inline-block'>Have an account?</span>
                                        <Link to='/' className='font-bold border px-1 text-orange-600'>Sign In</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;