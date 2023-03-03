import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import VehiclePage from "../pages/Vehicle";
import ProtectedRoute from "./protectedRoutes/index ";

const RoutesMain = () => {
  return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/home" element={<HomePage />} />
			<Route path="/vehicle/:id" element={<VehiclePage />} />
			<Route element={<ProtectedRoute />}>
				<Route path="/profile" element={<Profile />} />
			</Route>
		</Routes>
  );
};

export default RoutesMain;
