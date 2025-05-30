import React, { useContext } from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa6';

import Swal from 'sweetalert2';
import { AuthContext } from '../providers/Authproviders';

const Login = ({ switchToRegister, closeModal }) => {
    const { signin, googleSignin } = useContext(AuthContext);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signin(email, password)
            .then(result => {
                console.log(result.user);
                closeModal();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Successfully Logged In",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                console.error(error);
            });
    };

    const handleGoogleLogin = () => {
        googleSignin()
            .then(result => {
                console.log(result.user);
                closeModal();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Successfully Logged in with Google",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div className="w-full max-w-md">
            <div className="card-body">
                <h2 className="card-title text-3xl font-bold text-center mb-6">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-control">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" name="email" placeholder="Enter your email" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control mt-4">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" name="password" placeholder="Enter your password" className="input input-bordered w-full" required />
                    </div>
                    <div className="mt-6">
                        <button className="btn bg-[#ff6a19] w-full text-white">Login</button>
                    </div>
                </form>

                <div className="divider my-6">or log in with</div>
                <div className="flex gap-4 justify-center">
                    <button onClick={handleGoogleLogin} className="btn btn-outline gap-2">
                        <FaGoogle className="text-red-500" /> Google
                    </button>
                    <button className="btn btn-outline gap-2">
                        <FaFacebook className="text-blue-600" /> Facebook
                    </button>
                </div>

                <div className="text-center mt-6">
                    <span className="text-sm">Don't have an account? </span>
                    <button onClick={switchToRegister} className="text-blue-600 hover:underline font-medium">Register</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
