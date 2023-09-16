import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface RestrictedRouteProps {
  component: JSX.Element;
  redirectTo?: string;
}

export const RestrictedRoute: React.FC<RestrictedRouteProps> = ({
  component: Component,
  redirectTo = "/",
}) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate(redirectTo);
    }
  }, [isLoggedIn, navigate, redirectTo]);

  return Component;

  // if (!isLoggedIn) {
  //   navigate(redirectTo);
  //   return null;
  // } else {
  //   return Component;
  // }
};
