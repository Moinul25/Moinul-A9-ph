import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext } from "react";
import { Link } from "react-router";
import auth from "../firebase/firebase.config";
import { Authcontext } from "../provider/AuthProvider";

const Login = () => {
  const { setUser, user } = useContext(Authcontext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(user);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 ">
      <div className="card w-full max-w-sm bg-base-100 shadow-xl p-6 rounded-2xl">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        <form onSubmit={handleLogin} className="space-y-5 fildset">
          <label className="form-control w-full">
            <span className="label label-text font-semibold pb-1">Email</span>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control w-full ">
            <span className=" label label-text font-semibold pb-1">
              Password
            </span>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />
          </label>

          <div className="py-1 ">
            <a className="link link-hover text-sm">Forgot password?</a>
            <p className="text-sm pt-2">
              Don't have an account?
              <Link to={"/signup"} className="link link-hover ml-1">
                Register
              </Link>
            </p>
          </div>

          <button className="btn btn-neutral w-full mt-2">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
