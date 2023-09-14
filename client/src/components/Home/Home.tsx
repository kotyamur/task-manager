import { FC } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Home: FC = () => {
    return (
      <Box
        sx={{
          width: "100%",
          maxWidth: 500,
          margin: "auto",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Welcome to your task manager!!
        </Typography>
        <Typography variant="h5" gutterBottom mb={3} sx={{color: "primary.dark"}}>
          Sign up or Log in to get started.
        </Typography>
        <Box sx={{ display: "flex", gap: 4, justifyContent: "center" }}>
          <Button variant="outlined" component={Link} to="/login">
            Log In
          </Button>
          <Button variant="contained" component={Link} to="/register">
            Sign up
          </Button>
        </Box>
      </Box>
    );
};

export default Home;
