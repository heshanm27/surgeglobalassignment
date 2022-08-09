import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import AdminDetails from "../Pages/AdminDetails/AdminDetails";
import NotFound from "../Pages/NotFound/NotFound";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import UserDetails from "../Pages/UserDetails/UserDetails";
import UserDetailsForm from "../Pages/newUserDetailsForm/UserDetailsForm";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const { loggedIn } = useSelector((state) => state.user);
  return (
    <>
      <Routes>
        <Route path="/" element={loggedIn ? <ProtectedRoute /> : <SignUp />} />
        <Route
          path="/signIn"
          element={loggedIn ? <ProtectedRoute /> : <SignIn />}
        />
        <Route path="/newuser" element={<UserDetailsForm />} />
        <Route path="/admin" element={<AdminDetails />} />
        <Route path="/user" element={<UserDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
