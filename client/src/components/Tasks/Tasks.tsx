import { FC } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TasksList from "./TasksList/TasksList";

const Tasks: FC = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ p: 2, display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5">Category</Typography>
        <Button variant="contained" sx={{ marginRight: 2 }}>
          Add task
        </Button>
      </Box>
      <TasksList />
    </Box>
  );
};

export default Tasks;
