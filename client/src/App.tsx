import { FC } from "react";
import AppRouter from "./router/router";
import Container from "@mui/material/Container";

const App: FC = () => {
  return (
      <Container>
        <AppRouter />
      </Container>
  );
};

export default App;
