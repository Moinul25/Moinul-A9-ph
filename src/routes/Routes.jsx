import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Homepage from "../pages/Homepage";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import PrivateRoute from "./PrivateRoute";
import DetailsPage from "../pages/DetailsPage";
import ForgetPass from "../pages/ForgetPass";
import errorimg from "../assets/error-404.png";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,

    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/login",

        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Register />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <DetailsPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/forget/:email?",
        element: <ForgetPass></ForgetPass>,
      },

      {
        path: "*",
        element: (
          <div className="flex flex-col items-center justify-center py-10">
            <img src={errorimg} alt="" srcset="" />
            <p className="text-gray-500 mt-7 text-lg">No Result Founded</p>
          </div>
        ),
      },
    ],
  },
]);
