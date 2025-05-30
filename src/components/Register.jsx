import React, { useContext, useState } from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa6';
import { AuthContext } from '../providers/Authproviders';
import Swal from 'sweetalert2';

const Register = ({ switchToLogin, closeModal }) => {
  const { createUser, updateUserProfile, googleSignin } = useContext(AuthContext);

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  const validate = (name, email, password) => {
    let isValid = true;
    const newErrors = {
      name: '',
      email: '',
      password: '',
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

    if (name.trim().length < 4) {
      newErrors.name = 'Name must be at least 4 characters long.';
      isValid = false;
    }

    if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    if (!passwordRegex.test(password)) {
      newErrors.password = 'Password must be at least 6 characters, include an uppercase, lowercase, and a special character.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;

    if (!validate(name, email, password)) return;

    createUser(email, password)
      .then(result => {
        console.log(result.user);
        updateUserProfile(name)
          .then(() => {
            console.log('User profile updated');
          })
          .catch(error => console.log(error));

        closeModal();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Register Successful",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch(error => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: error.message || "Something went wrong!",
        });
      });
  };

  const handleGoogleSignIn = () => {
    googleSignin()
      .then(result => {
        console.log(result.user);
        closeModal();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Registered with Google",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch(error => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Google Sign-In Failed",
          text: error.message || "Something went wrong!",
        });
      });
  };

  return (
    <div className="w-full max-w-md">
      <div className="card-body">
        <h2 className="card-title text-3xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="form-control">
            <label className="label"><span className="label-text">Name</span></label>
            <input type="text" name="name" placeholder="Enter your name" className="input input-bordered w-full" required />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div className="form-control">
            <label className="label"><span className="label-text">Email</span></label>
            <input type="email" name="email" placeholder="Enter your email" className="input input-bordered w-full" required />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="form-control mt-4">
            <label className="label"><span className="label-text">Password</span></label>
            <input type="password" name="password" placeholder="Enter your password" className="input input-bordered w-full" required />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>
          <div className="mt-6">
            <button className="btn bg-[#ff6a19] w-full text-white">Register</button>
          </div>
        </form>

        <div className="divider my-6">or sign up with</div>
        <div className="flex gap-4 justify-center">
          <button onClick={handleGoogleSignIn} className="btn btn-outline gap-2">
            <FaGoogle className="text-red-500" /> Google
          </button>
          <button className="btn btn-outline gap-2">
            <FaFacebook className="text-blue-600" /> Facebook
          </button>
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
