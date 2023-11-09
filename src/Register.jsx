import { Link } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from "sweetalert2";
import auth from "./components/Firebase/firebase.config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [sucess, setSucess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const sucessAlert = () => {
        Swal.fire(
            'Welcome!',
            'Registration Sucessfully!',
            'success'
        );
    }

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const terms = form.terms.checked;
        console.log(name, email, password, terms);

        // reset error & success
        setRegisterError('');
        setSucess('');

        if (password.length < 6) {
            setRegisterError('Password must be at least 6 characters');
            return;
        }

        else if (!/(?=.*[A-Z])/.test(password)) {
            setRegisterError('Password must contain at least one uppercase letter');
            return;
        }

        else if (!/(?=.*[a-z])/.test(password)) {
            setRegisterError("Password must contain at least one lowercase letter.");
            return;
        }

        else if (!/(?=.*\d)/.test(password)) {
            setRegisterError("Password must contain at least one digit.");
            return;
        }

        else if (!/(?=.*[@$!%*?&])/.test(password)) {
            setRegisterError("Password must contain at least one special character (@, $, !, %, *, ?, or &).");
            return;
        }

        else if (!terms) {
            setRegisterError('You must agree to the terms and conditions');
            return;
        }



        // create user 
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSucess(sucessAlert)

                // update profile
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: result.user.photoURL
                })
                    .then(() => {
                        console.log('Profile updated');
                    })
                    .catch()

            })
            .catch(error => {
                (console.error(error));
                setRegisterError(error.message);
            })
    }



    return (
        <>
            <div className="my-5">
                <h1 className="text-5xl text-center font-bold bg-base-200 py-10">Register now!</h1>
                <div className="hero bg-base-200 py-10">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="name" placeholder="name" name="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type={showPassword ? "text" : "password"} placeholder="password" name="password" className="input input-bordered" required />
                                    <span className="absolute top-[63%] left-72" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }
                                    </span>
                                </div>
                                <div>
                                    <input type="checkbox" name="terms" id="terms" />
                                    <label htmlFor="terms"> Accept our <a className="link link-hover" href="">terms & condition</a></label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-outline">Register</button>
                                </div>
                                <label className="label">
                                    <p>Already have an account? <Link to='/login' className="link link-hover text-blue-600 font-bold">Login</Link></p>
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="text-center bg-base-200 pb-10">
                    {registerError && <p className="text-xl text-red-600">{registerError}</p>}
                    {sucess && <p className="text-xl text-green-600">{sucess}</p>}
                </div>
            </div>
        </>
    );
};

export default Register;