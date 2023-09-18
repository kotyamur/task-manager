import * as React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TaskDeletePopup from "../TaskDeletePopup/TaskDeletePopup";
import { styled } from "@mui/material/styles";
import { taskItemStyles } from "./taskItemStyles";


const DemoPaper = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
}));

const TaskItem: React.FC<{ it: number }> = ({ it }) => {
  const [openDeletePopup, setOpenDeletePopup] = React.useState(false);

  const handleDeleteActionClick = () => {
    setOpenDeletePopup(true);
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
    <Grid item xs={4} sm={4} md={4} key={it} component={ListItem}>
      <DemoPaper variant="outlined" sx={taskItemStyles.paper}>
        <Box sx={taskItemStyles.textWrapper}>
          <Typography variant="h6">Fix phone input field</Typography>
          <Typography variant="body1">start date 16.07.2023</Typography>
          <Typography variant="body1">end date 22.07.2023</Typography>
        </Box>
        <Box sx={taskItemStyles.buttonsWrapper}>
          <Button
            size="small"
            variant="outlined"
            onClick={handleDeleteActionClick}
          >
            Delete
          </Button>

          <Button size="small" variant="outlined">
            Edit
          </Button>
        </Box>
      </DemoPaper>
      {openDeletePopup && (
        <TaskDeletePopup
          open={openDeletePopup}
          handleClose={handleCloseDeletePopup}
        />
      )}
    </Grid>
  );
};

export default TaskItem;
