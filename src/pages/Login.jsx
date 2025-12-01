import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 ">
      <div className="card w-full max-w-sm bg-base-100 shadow-xl p-6 rounded-2xl">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        <div className="space-y-5">
          {/* Email */}
          <label className="form-control w-full">
            <span className="label label-text font-semibold pb-1">Email</span>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </label>

          {/* Password */}
          <label className="form-control w-full ">
            <span className=" label label-text font-semibold pb-1">
              Password
            </span>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />
          </label>

          {/* Forgot Password */}
          <div className="py-1 ">
            <a className="link link-hover text-sm">Forgot password?</a>
            <p className="text-sm pt-2">
              Don't have an account?
              <Link to={"/signup"} className="link link-hover ml-1">
                Register
              </Link>
            </p>
          </div>

          {/* Login Button */}
          <button className="btn btn-neutral w-full mt-2">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
