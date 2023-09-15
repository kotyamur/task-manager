import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import CategoryDeletePopup from "../CategoryDeletePopup/CategoryDeletePopup";
import CategoryEditPopup from "../CategoryEditPopup/CategoryEditPopup";
import { categoryActionsStyles } from "./categoryActionsStyles";

const CategoryActions: React.FC = () => {
  const [openDeletePopup, setOpenDeletePopup] = React.useState(false);
  const [openEditPopup, setOpenEditPopup] = React.useState(false);
  const handleEditActionClick = () => {
    setOpenEditPopup(true);
  };
  const handleDeleteActionClick = () => {
    setOpenDeletePopup(true);
  };
  const handleCloseEditPopup = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.target === event.currentTarget) {
    //   event.stopPropagation();
      setOpenEditPopup(false);
    }
  };
  const handleCloseDeletePopup = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (event.target === event.currentTarget) {
    //   event.stopPropagation();
      setOpenDeletePopup(false);
    }
  };
    
  return (
    <Box sx={categoryActionsStyles.ulWrapper}>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleEditActionClick}>
            <ListItemText primary="Edit" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={handleDeleteActionClick}>
            <ListItemText primary="Delete" />
          </ListItemButton>
        </ListItem>
      </List>
      {openDeletePopup && (
        <CategoryDeletePopup
          open={openDeletePopup}
          handleClose={handleCloseDeletePopup}
        />
      )}
      {openEditPopup && (
        <CategoryEditPopup
          open={openEditPopup}
          handleClose={handleCloseEditPopup}
        />
      )}
    </Box>
  );
};

export default CategoryActions;
