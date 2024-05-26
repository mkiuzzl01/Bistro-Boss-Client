import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <span className="loading loading-dots loading-lg"></span>;
  if (user) return children;
  return <Navigate to="/Login" state={{from:location}} replace></Navigate>;
};

export default PrivateRoutes;
