import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminDetails from "./Pages/AdminDetails";
import NotFound from "./Pages/NotFound";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import UserDetails from "./Pages/UserDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/admin" element={<AdminDetails />} />
      <Route path="/user" element={<UserDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
