import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const token = JSON.parse(localStorage.getItem("token") ?? "null");

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
