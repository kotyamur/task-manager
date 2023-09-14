import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const CategoryDeletePopup: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
//   const handleOpen = () => {
//     setOpen(true);
//   };
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={handleClose}
    >
      <Box sx={{ p: 2, textAlign: "end", width: 300, height: 300 }}>
        <Button variant="contained" sx={{ marginBottom: 4, marginRight: 2 }}>
          Delete
        </Button>
      </Box>
    </Backdrop>
  );
};

export default CategoryDeletePopup;
