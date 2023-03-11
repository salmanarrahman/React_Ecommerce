import React, {useContext} from 'react';
import img from '../../assets/images/login/login.svg';
import {Link} from "react-router-dom";
import {AuthContext} from "../../Context/AuthProvider"

const SignUp = () => {

    const {createUser} = useContext(AuthContext)
    const handleFormSubmit = (event) => {

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email,password).then(res => {
            const user = res.user;
            console.log(user)
        }).then(er => console.log(er))

    }

    return (
        <div className="hero w-full my-10">
            <div className="hero-content gap-20 grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center  lg:text-left">
                    <img className="w-3/4" src={img} alt=""/>
                </div>
                <div className="card   w-full max-w-sm shadow-2xl bg-base-100 my-10 py-10">
                    <h1 className="text-xl pt-3 text-center font-bold">Sign Up</h1>

                    <form onSubmit={handleFormSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="text" placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="login"/>
                        </div>
                    </form>

                    <p className="text-center">Already Have an Account ? <Link className=" text-orange-600 font-bold" to="/login">Login</Link></p>

                </div>
            </div>
        </div>
    );
};

export default SignUp;