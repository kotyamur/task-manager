import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { format } from "date-fns";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TaskDeletePopup from "../TaskDeletePopup/TaskDeletePopup";
import { styled } from "@mui/material/styles";
import { taskItemStyles } from "./taskItemStyles";
import { IOneTaskData } from "../../../types/types";

const DemoPaper = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
}));

const TaskItem: React.FC<IOneTaskData> = ({ id, dateEnd, dateStart, name }) => {
  const location = useLocation();
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
  const formeStartdDate = format(new Date(dateStart), "dd.MM.yyyy");
  const formeEnddDate = format(new Date(dateEnd), "dd.MM.yyyy");
  return (
    <Grid item xs={4} sm={4} md={4} component={ListItem}>
      <DemoPaper variant="outlined" sx={taskItemStyles.paper}>
        <Box sx={taskItemStyles.textWrapper}>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body1">start date {formeStartdDate}</Typography>
          <Typography variant="body1">end date {formeEnddDate}</Typography>
        </Box>
        <Box sx={taskItemStyles.buttonsWrapper}>
          <Button
            size="small"
            variant="outlined"
            onClick={handleDeleteActionClick}
          >
            Delete
          </Button>

          <Button
            size="small"
            variant="outlined"
            component={Link}
            to={`/task?taskId=${id}`}
            state={{ from: location }}
          >
            Edit
          </Button>
        </Box>
      </DemoPaper>
      {openDeletePopup && (
        <TaskDeletePopup
          open={openDeletePopup}
          handleClose={handleCloseDeletePopup}
          taskId={id}
        />
      )}
    </Grid>
  );
};

export default TaskItem;
