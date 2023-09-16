import * as React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { register } from "../../redux/user/authOperations";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Register: React.FC = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(email, password);
    dispatch(register({ email, password }));
  };

    return (
      <Box
        sx={{
          width: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "30ch" },
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Typography
            variant="h5"
            gutterBottom
            mb={3}
            sx={{ color: "primary.dark" }}
          >
            Register form
          </Typography>
          <TextField
            label="Email:"
            value={email}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(event.target.value);
            }}
          />

          <TextField
            //   error
            label="Password"
            value={password}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(event.target.value);
            }}
            //   helperText="Incorrect entry."
          />
          <Box
            sx={{ display: "flex", gap: 6, justifyContent: "center", mt: 3 }}
          >
            <Button
              variant="contained" type="submit"
            >
              Sign up
            </Button>
            <Button
              variant="outlined"
              component={Link}
              to="/login"
            >
              Log In
            </Button>
          </Box>
        </Box>
      </Box>
    );
};

export default Register;
