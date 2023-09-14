import { FC } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";


const CategoryActions: FC = () => {
  return (
    <Box
      sx={{
        width: 124,
        height: 112,
        bgcolor: "background.paper",
        zIndex: 2,
        position: "absolute",
        top: 56,
        boxShadow:
          "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
      }}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Edit" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Delete" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default CategoryActions;
