import { FC } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const ErrorPage: FC = () => {
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
        Not Found
      </Typography>
      <Typography
        variant="h5"
        gutterBottom
        mb={3}
        sx={{ color: "primary.dark" }}
      >
        Could not find requested resource
      </Typography>
      <Box sx={{ display: "flex", gap: 4, justifyContent: "center" }}>
        <Button variant="outlined" component={Link} to="/login">
          Go to login page
        </Button>
      </Box>
    </Box>
  );
};

export default ErrorPage;
