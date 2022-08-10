import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import UserList from "../Pages/UserList/UserList";
import NotFound from "../Pages/NotFound/NotFound";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import NotesList from "../Pages/NoteList/NotesList";
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
        <Route
          path="/newuser"
          element={loggedIn ? <SignIn /> : <UserDetailsForm />}
        />
        <Route path="/admin" element={loggedIn ? <SignIn /> : <UserList />} />
        <Route path="/user" element={!loggedIn ? <SignIn /> : <NotesList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
