import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import AdminDetails from "../Pages/AdminDetails/AdminDetails";
import SignIn from "../Pages/SignIn/SignIn";
import UserDetails from "../Pages/UserDetails/UserDetails";
import UserDetailsForm from "../Pages/UserDetailsForm/UserDetailsForm";
export default function ProtectedRoute() {
  const { userInfo } = useSelector((state) => state.user);

  if (!userInfo) {
    return <SignIn />;
  } else if (userInfo.user.status) {
    return <UserDetailsForm />;
  } else if (userInfo.user.accountType === "admin") {
    return <AdminDetails />;
  } else if (userInfo.user.accountType === "user") {
    return <UserDetails />;
  } else {
    return <Outlet />;
  }
}
