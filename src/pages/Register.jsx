import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import { Authcontext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { FcGoogle } from "react-icons/fc";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  const { registerUserWithEmailPassword, setUser, user, handleGoogleSignIn } =
    useContext(Authcontext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const url = e.target.url.value;

    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;

    if (password.length < 6) {
      return toast("less than 6 charcters");
    }
    {
      if (!uppercase.test(password)) {
        return toast("Need one uppercase letter");
      }
      if (!lowercase.test(password)) {
        return toast("Need one lowercase letter");
      }
    }

    registerUserWithEmailPassword(email, password)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: url,
        })
          .then(() => {
            setUser(userCredential.user);
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(user);

  const googleSignUp = () => {
    handleGoogleSignIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className=" flex justify-center items-center min-h-screen mt-8">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-4">
        <h2 className="font-semibold text-2xl text-center">
          Register your account!
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Full Name"
              required
            />

            <label className="label">Photo URL</label>
            <input
              type="text"
              name="url"
              className="input"
              placeholder="Photo URL"
            />
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
          </fieldset>
          <h2 className="text-semibold text-[#706F6F] text-center pt-4">
            Allreday Have An Account ?
            <Link className="text-secondary p-1 underline" to={"/login"}>
              Login
            </Link>
          </h2>
          <div className=" px-6">
            <div className="divider">OR</div>
          </div>

          <div className="px-6 space-y-1 mb-1">
            <button
              onClick={googleSignUp}
              className="btn btn-outline w-full flex items-center gap-2"
            >
              <FcGoogle />
              Continue with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
