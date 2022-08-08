import React from "react";
import { useSelector } from "react-redux";

import AdminDetails from "../Pages/AdminDetails/AdminDetails";
import SignIn from "../Pages/SignIn/SignIn";
import UserDetails from "../Pages/UserDetails/UserDetails";
import UserDetailsForm from "../Pages/newUserDetailsForm/UserDetailsForm";
import { useNavigate } from "react-router-dom";
export default function ProtectedRoute() {
  const navigate = useNavigate();
  const { userInfo, loggedIn } = useSelector((state) => state.user);

  if (!loggedIn) {
    navigate("/signIn");
    return <SignIn />;
  } else if (userInfo.user.status) {
    return <UserDetailsForm />;
  } else if (userInfo.user.accountType === "admin") {
    return <AdminDetails />;
  } else if (userInfo.user.accountType === "user") {
    return <UserDetails />;
  }
}
