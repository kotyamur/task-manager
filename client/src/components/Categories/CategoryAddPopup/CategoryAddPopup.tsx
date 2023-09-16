import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const CategoryAddPopup: React.FC<{
  open: boolean;
  handleClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
}> = ({ open, handleClose }) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={handleClose}
    >
      <Box
        sx={{
          backgroundColor: "#fff",
          p: 4,
          textAlign: "center",
          width: 280,
          height: 200,
        }}
      >
        <Typography
          variant="body1"
          gutterBottom
          mb={5}
          sx={{ color: "primary.dark" }}
        >
          Create category
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            label="Name"
            // defaultValue="Category name"
            variant="outlined"
          />
          <Box
            sx={{
              display: "flex",
              gap: 4,
              justifyContent: "center",
              marginTop: 5,
            }}
          >
            <Button variant="outlined" onClick={handleClose}>
              cancel
            </Button>
            <Button variant="contained">save</Button>
          </Box>
        </Box>
      </Box>
    </Backdrop>
  );
};

export default CategoryAddPopup;
