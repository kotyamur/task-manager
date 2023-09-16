import { FC, useEffect } from "react";
import AppRouter from "./router/router";
import Container from "@mui/material/Container";
import { useAppDispatch } from "./redux/hooks";
import { useAuth } from "./hooks/useAuth";
import { refreshUser } from "./redux/user/authOperations";

const App: FC = () => {
  const dispatch = useAppDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Container>
      <AppRouter />
    </Container>
  );
};

export default App;
