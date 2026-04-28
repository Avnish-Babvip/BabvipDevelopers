import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const { isUserLoggedIn } = useSelector((state) => state.authentication);
  const location = useLocation();

  if (!isUserLoggedIn) {
    return (
      <Navigate
        to="/login--signup"
        state={{ from: location }} // 🔥 save previous route
        replace
      />
    );
  }

  return children;
};

export default ProtectedRoute;
