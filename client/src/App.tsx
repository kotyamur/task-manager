import { FC } from "react";
import { SharedLayout } from "./components/SharedLayout";
import AppRouter from "./router/router";

const App: FC = () => {
  return (
    <div>
      <SharedLayout />
      <AppRouter />
    </div>
  );
};

export default App;
