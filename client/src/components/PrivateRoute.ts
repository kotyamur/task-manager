import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface PrivateRouteProps {
  component: JSX.Element;
  redirectTo?: string;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: RedirectComponent,
  redirectTo = "/",
}) => {
  const navigate = useNavigate();
  const { isLoggedIn,
    // isRefreshing
  } = useAuth();
  const shouldRedirect = !isLoggedIn
    // && !isRefreshing;

  useEffect(() => {
    if (shouldRedirect) {
      navigate(redirectTo);
    }
  }, [shouldRedirect, navigate, redirectTo]);

  return RedirectComponent;

  // if (shouldRedirect) {
  //   navigate(redirectTo);
  //   return null;
  // } else {
  //   return RedirectComponent;
  // }
};
