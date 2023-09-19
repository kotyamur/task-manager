import { FC } from "react";
import { Outlet, Link } from "react-router-dom";
import { Suspense } from "react";

import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/user/authSelectors";

import {
  AppBar,
  Container,
  Typography,
  Toolbar,
  Box,
  Button,
} from "@mui/material";
import { useAppDispatch } from "../redux/hooks";
import { logOut } from "../redux/user/authOperations";

export const SharedLayout: FC = () => {
  const dispatch = useAppDispatch();
  const isUserLogined = useSelector(selectIsLoggedIn);
  return (
    <Box sx={{ paddingTop: "106px" }}>
      <AppBar>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Typography
              variant="h4"
              noWrap
              component="a"
              href="/"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Task manager
            </Typography>
            <Box sx={{ flexGrow: 1, display: "flex" }}>
              {!isUserLogined && (
                <Button color="inherit" component={Link} to="/">
                  Login/Signup
                </Button>
              )}
              {isUserLogined && (
                <Button color="inherit" onClick={() => dispatch(logOut())}>
                  LogOut
                </Button>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Suspense fallback={<div>...loading</div>}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
