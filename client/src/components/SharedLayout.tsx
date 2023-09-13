import { FC } from "react";
import { Outlet, Link } from "react-router-dom";
import { Suspense } from "react";

import {
  AppBar,
  Container,
  Typography,
  Toolbar,
  Box,
  Button,
} from "@mui/material";

export const SharedLayout: FC = () => {
  return (
    <div>
      <AppBar>
        <Container maxWidth="xl">
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: "flex",
              justifyContent: "center",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Task manager
          </Typography>
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: "flex" }}>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/categories">
                Categories
              </Button>
              <Button color="inherit" component={Link} to="/tasks">
                Tasks
              </Button>
              <Button color="inherit" component={Link} to="/task">
                Task
              </Button>
            </Box>
            <Box display={"flex"} mr={3}>
              <Button
                color="inherit"
                variant="outlined"
                component={Link}
                to="/login"
              >
                Log In
              </Button>
              <Button
                color="secondary"
                variant="contained"
                component={Link}
                to="/register"
              >
                Sign up
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Suspense fallback={<div>...loading</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
