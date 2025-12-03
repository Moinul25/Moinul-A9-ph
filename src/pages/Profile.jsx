import React, { useContext, useState } from "react";
import { Authcontext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { toast, ToastContainer } from "react-toastify";

const Profile = () => {
  const { user, setUser } = useContext(Authcontext);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenForm = () => {
    setIsOpen(!isOpen);
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const url = e.target.url.value;

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: url,
    })
      .then(() => {
        setUser({
          ...user,
          displayName: name,
          photoURL: url,
        });
        toast("Profile Updated Successfully!");
        setIsOpen(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center items-center mt-12 px-4">
      <div className="card w-full max-w-sm bg-base-100 shadow-xl p-6 rounded-2xl">
        <div className="flex flex-col items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-28">
              <img src={user?.photoURL} alt="Profile Photo" />
            </div>
          </div>

          <h2 className="text-2xl font-bold">
            {user?.displayName || "No Name"}
          </h2>
          <p className="text-gray-400">{user?.email}</p>
        </div>

        <div className="divider my-6"></div>

        <div className="space-y-3">
          <div className="flex justify-between text-gray-300">
            <span className="font-medium">Account Type:</span>
            <span>User</span>
          </div>

          <div className="flex justify-between text-gray-300">
            <span className="font-medium">Email Verified:</span>
            <span>{user?.emailVerified ? "Yes" : "No"}</span>
          </div>

          <div className="flex justify-between text-gray-300">
            <span className="font-medium">UID:</span>
            <span className="truncate max-w-[120px]">{user?.uid}</span>
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={handleOpenForm}
            className="btn btn-warning w-full text-black font-semibold"
          >
            {isOpen ? "Close Editor" : "Edit Profile"}
          </button>

          {isOpen && (
            <form
              onSubmit={handleUpdateProfile}
              className="mt-4 space-y-3 bg-base-200 p-4 rounded-xl"
            >
              <label className="label">Name</label>
              <input
                defaultValue={user?.displayName}
                name="name"
                type="text"
                className="input input-bordered w-full"
              />

              <label className="label">Photo URL</label>
              <input
                defaultValue={user?.photoURL}
                name="url"
                type="text"
                className="input input-bordered w-full"
              />

              <button className="btn  w-full mt-2" type="submit">
                Update
              </button>
            </form>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Profile;
