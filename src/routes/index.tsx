import { Route, Routes } from "react-router-dom";
import AnauncesPage from "../pages/Anaunces";
import HomePage from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import VehiclePage from "../pages/Vehicle";
import { ProtectedRouteAnaunces, ProtectedRouteProfile } from "./protectedRoutes/index ";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/vehicle" element={<VehiclePage />} />
      <Route path="*" element={<HomePage/>} />
      
      <Route path="/vehicle/:id" element={<VehiclePage />} />

      <Route element={<ProtectedRouteAnaunces />}>
        <Route path="/anaunces/:id" element={<AnauncesPage />} />
      </Route>

      <Route element={<ProtectedRouteProfile />}>
        <Route path="/profile/:id" element={<Profile />} />
      </Route>
    
    </Routes>
  );
};

export default RoutesMain;
