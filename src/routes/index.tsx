import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";

import Login from "../pages/Login";
import Register from "../pages/Register";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
};

export default RoutesMain;
