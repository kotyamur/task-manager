import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import CategoryDeletePopup from "../CategoryDeletePopup/CategoryDeletePopup";
import CategoryEditPopup from "../CategoryEditPopup/CategoryEditPopup";
import { categoryActionsStyles } from "./categoryActionsStyles";

const CategoryActions: React.FC<{
  categoryId: number;
  handleActionsClose: () => void;
  categoryName: string;
}> = ({ handleActionsClose, categoryId, categoryName }) => {
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
      setOpenEditPopup(false);
      handleActionsClose();
    }
  };
  const handleCloseDeletePopup = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (event.target === event.currentTarget) {
      setOpenDeletePopup(false);
      handleActionsClose();
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
      {openDeletePopup && categoryId !== null && (
        <CategoryDeletePopup
          open={openDeletePopup}
          handleClose={handleCloseDeletePopup}
          id={categoryId}
        />
      )}
      {openEditPopup && categoryId !== null && (
        <CategoryEditPopup
          open={openEditPopup}
          handleClose={handleCloseEditPopup}
          id={categoryId}
          categoryName={categoryName}
          setOpenEditPopup={setOpenEditPopup}
          handleActionsClose={handleActionsClose}
        />
      )}
    </Box>
  );
};

export default CategoryActions;
