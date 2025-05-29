import React from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa6';

const Register = ({ switchToLogin }) => {
    return (
        <div className="w-full max-w-md">
            <div className="card-body">
                <h2 className="card-title text-3xl font-bold text-center mb-6">Register</h2>
                <div className="form-control">
                    <label className="label"><span className="label-text">Full Name</span></label>
                     <br />
                    <input type="text" placeholder="Enter your name" className="input input-bordered" />
                </div>
                <div className="form-control mt-4">
                    <label className="label"><span className="label-text">Email</span></label>
                     <br />
                    <input type="email" placeholder="Enter your email" className="input input-bordered" />
                </div>
                <div className="form-control mt-4">
                    <label className="label"><span className="label-text">Password</span></label>
                     <br />
                    <input type="password" placeholder="Enter your password" className="input input-bordered" />
                </div>
                <div className="mt-6">
                    <button className="btn bg-[#ff6a19] w-full text-white">Register</button>
                </div>
                <div className="divider my-6">or sign up with</div>
                <div className="flex gap-4 justify-center">
                    <button className="btn btn-outline gap-2"><FaGoogle className="text-red-500" /> Google</button>
                   
                    <button className="btn btn-outline gap-2"><FaFacebook className="text-blue-600" /> Facebook</button>
                </div>
                <div className="text-center mt-6">
                    <span className="text-sm">Already have an account? </span>
                    <button onClick={switchToLogin} className="text-blue-600 hover:underline font-medium">Log in</button>
                </div>
            </div>
        </div>
    );
};

export default Register;
