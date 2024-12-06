import { Route, Routes } from "react-router-dom";
import LoginMenu from "./components/LoginMenu";
import SignUp from "./components/signUp/signUp";
import Forget from "./components/Forget/Forget";
import Home from "./components/Home/Home";

export default function AllRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginMenu />} />
      <Route path="/forget" element={<Forget />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}
