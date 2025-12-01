import React, { useContext } from "react";
import { Link } from "react-router";
import { Authcontext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

const Register = () => {
  const { registerUserWithEmailPassword, setUser, user } =
    useContext(Authcontext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const url = e.target.url.value;

    registerUserWithEmailPassword(email, password)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: url,
        })
          .then(() => {
            setUser(userCredential.user);
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
  return (
    <div className=" flex justify-center items-center min-h-screen">
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
        </form>
      </div>
    </div>
  );
};

export default Register;
