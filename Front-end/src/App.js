import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import NewPass from "./NewPass";

export default function App() {
    return (
    <BrowserRouter>
        <Routes>
          <Route path="/" excat element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/newPass" element={<NewPass />} />
        </Routes>
    </BrowserRouter>
    );
  }