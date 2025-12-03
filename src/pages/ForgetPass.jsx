import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { useParams } from "react-router";
import auth from "../firebase/firebase.config";
import { toast, ToastContainer } from "react-toastify";

const ForgetPass = () => {
  const { email } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formEmail = e.target.email.value; // FIXED

    sendPasswordResetEmail(auth, formEmail)
      .then(() => {
        toast("Password reset link sent to your email!");
        window.open("https://mail.google.com/mail/u/0/");
      })
      .catch((error) => {
        console.log(error);
        toast("Something went wrong!");
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-6 bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="label label-text font-semibold">Email</label>

          <input
            defaultValue={email}
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            className="input input-bordered w-full focus:outline-none focus:border-blue-500"
          />

          <button className="btn btn-neutral w-full mt-2 font-semibold">
            Reset Password
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ForgetPass;
