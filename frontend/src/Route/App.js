import { Route, Routes } from "react-router-dom";
import NavBar from "../Component/NavBar/NavBar";

import AdminDetails from "../Pages/AdminDetails/AdminDetails";
import NotFound from "../Pages/NotFound/NotFound";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import UserDetails from "../Pages/UserDetails/UserDetails";
import UserDetailsForm from "../Pages/UserDetailsForm/UserDetailsForm";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <>
      <NavBar>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/newuser" element={<UserDetailsForm />} />
            <Route path="/admin" element={<AdminDetails />} />
            <Route path="/user" element={<UserDetails />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </NavBar>
    </>
  );
}

export default App;
