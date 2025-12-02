import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import auth from "../firebase/firebase.config";
import { Authcontext } from "../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { setUser, handleGoogleSignIn } = useContext(Authcontext);
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const googleSignIn = () => {
    handleGoogleSignIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location.state);
      })
      .catch((error) => console.log(error));
  };

  const handleForget = () => {
    navigate(`/forget/${email}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 ">
      <div className="card w-full max-w-sm bg-base-100 shadow-xl p-6 rounded-2xl">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        <form onSubmit={handleLogin} className="space-y-5 fildset">
          <label className="form-control w-full">
            <span className="label label-text font-semibold pb-1">Email</span>
            <input
              onChange={(e) => setEmail(e.target.value)}
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
            <button onClick={handleForget} className="link link-hover text-sm">
              Forgot password?
            </button>
            <p className="text-sm pt-2">
              Don't have an account?
              <Link to={"/signup"} className="link link-hover ml-1">
                Register
              </Link>
            </p>
          </div>
          <button className="btn btn-neutral w-full mt-2">Login</button>
          <div className="px-6 mt-2">
            <div className="divider">OR</div>
          </div>

          <div className="px-6 mb-3">
            <button
              onClick={googleSignIn}
              className="btn btn-outline w-full flex items-center "
            >
              <FcGoogle size={24} />
              Continue with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
