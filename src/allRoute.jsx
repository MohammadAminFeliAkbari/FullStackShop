import { Route, Routes } from "react-router-dom";
import LoginMenu from "./components/LoginMenu";
import SignUp from "./components/signUp";
export default function AllRoute() {
  return (
    <Routes>
      <Route path="/" element={<h1>home</h1>} />
      <Route path="/login" element={<LoginMenu />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}
