import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { isUserLogged } = useContext(AuthContext);

  return isUserLogged ? children : <Navigate to="/login" />;
};
