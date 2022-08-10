import React from "react";
import { useSelector } from "react-redux";

import UserList from "../Pages/UserList/UserList";
import SignIn from "../Pages/SignIn/SignIn";
import NotesList from "../Pages/NoteList/NotesList";
import UserDetailsForm from "../Pages/newUserDetailsForm/UserDetailsForm";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute() {
  const navigate = useNavigate();
  const { userInfo, loggedIn } = useSelector((state) => state.user);

  //check if user is logged in if not return to sign in page

  if (!loggedIn) {
    navigate("/signIn");
    return <SignIn />;
  } else if (userInfo.user ? userInfo.user.status : false) {
    //if user is a new user return to user details form
    navigate("/newuser");
    return <UserDetailsForm />;
  } else if (!userInfo.user.status && userInfo.user.accountType === "admin") {
    //if user is not new and is an admin return to admin details page
    navigate("/admin");
    return <UserList />;
  } else if (!userInfo.user.status && userInfo.user.accountType === "user") {
    //if user is not new and is a user return to user details page
    navigate("/user");
    return <NotesList />;
  }
}
