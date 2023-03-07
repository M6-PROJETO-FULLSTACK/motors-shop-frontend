import { Route, Routes } from "react-router-dom";
import AnauncesPage from "../pages/Anaunces";
import HomePage from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import VehiclePage from "../pages/Vehicle";
import ProtectedRoute from "./protectedRoutes/index ";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/vehicle" element={<VehiclePage />} />
      <Route path="*" element={<HomePage/>} />
      <Route element={<ProtectedRoute/>}>
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/vehicle/:id" element={<VehiclePage />} />
        <Route path="/anaunces/:id" element={<AnauncesPage />} />
      </Route>
    </Routes>
  );
};

export default RoutesMain;
