import * as React from "react";
import { Link } from "react-router-dom";
import { useFormik, FormikHelpers } from "formik";

import { useAppDispatch } from "../../redux/hooks";
import { logIn } from "../../redux/user/authOperations";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { registerLoginSchema } from "../../helpers/validation";
import { IRegisterLoginUserData } from "../../types/types";

const initialLoginValues: IRegisterLoginUserData = {
  email: "",
  password: "",
};

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  
  const handleSubmit = async (
    values: IRegisterLoginUserData,
    { setSubmitting }: FormikHelpers<IRegisterLoginUserData>
  ) => {
    console.log(values.email, values.password);
    await dispatch(logIn({ email: values.email, password: values.password }));
    setSubmitting(false);
  };

  const formik = useFormik({
    initialValues: initialLoginValues,
    validationSchema: registerLoginSchema,
    onSubmit: handleSubmit,
  });

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
        onSubmit={formik.handleSubmit}
      >
        <Typography
          variant="h5"
          gutterBottom
          mb={3}
          sx={{ color: "primary.dark" }}
        >
          Login form
        </Typography>
        <TextField
          label="Email:"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          label="Password"
          id="password"
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Box sx={{ display: "flex", gap: 6, justifyContent: "center", mt: 3 }}>
          <Button
            variant="contained"
            type="submit"
            disabled={formik.isSubmitting}
          >
            Log In
          </Button>
          <Button variant="outlined" component={Link} to="/register">
            Sign up
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
