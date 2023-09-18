import * as React from "react";
import { useAppDispatch } from "../../../redux/hooks";
import {
  deleteCategory,
  fetchUserCategories,
} from "../../../redux/categories/categoriesOperations";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CategoryDeletePopup: React.FC<{
  open: boolean;
  handleClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
  id: number;
}> = ({ open, handleClose, id }) => {
  const dispatch = useAppDispatch();

  const handleDeleteBtnClick = async () => {
    console.log(id);
    await dispatch(deleteCategory(id));
    dispatch(fetchUserCategories());
  };
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
          height: 120,
        }}
      >
        <Typography
          variant="body1"
          gutterBottom
          mb={7}
          sx={{ color: "primary.dark" }}
        >
          Do you want delete this category ?
        </Typography>
        <Box sx={{ display: "flex", gap: 4, justifyContent: "center" }}>
          <Button variant="outlined" onClick={handleClose}>
            no
          </Button>
          <Button variant="contained" onClick={handleDeleteBtnClick}>
            yes
          </Button>
        </Box>
      </Box>
    </Backdrop>
  );
};

export default CategoryDeletePopup;
