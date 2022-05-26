import React, { useEffect } from 'react';
import { FcGoogle } from "react-icons/fc";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../hooks/useToken';


const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(gUser || user);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    let signInError;

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    if (gLoading || loading) {
        return <Loading />
    }
    if (gError || error) {
        signInError = <p className='text-error'><small>{error?.message || gError?.message}</small></p>
    }


    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-error">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-error">{errors.email.message}</span>}

                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-error">{errors.password.message}</span>}
                                {errors.password?.type === 'pattern' && <span className="label-text-alt text-error">{errors.password.message}</span>}

                            </label>
                        </div>
                        {signInError}
                        <input className='btn w-full max-w-xs text-white' type="submit" value='Login' />
                    </form>
                    <p className='flex items-center justify-between'>
                        <small>New to <Link to='/signup' className='text-primary'>Create New Account</Link></small>
                        <small><Link to='/forgotpassword' className='text-primary'>Forgot Password</Link></small>
                    </p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    ><FcGoogle className='w-8 h-8 mr-2' />Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;