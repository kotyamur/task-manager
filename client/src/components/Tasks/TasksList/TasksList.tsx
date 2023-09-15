import { FC } from "react";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import TaskItem from "../TaskItem/TaskItem";

const TasksList: FC = () => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }} component={List}
    >
      {[0, 1, 2, 3, 4].map((it) => {
        return <TaskItem key={it} />;
      })}
    </Grid>
  );
};

export default TasksList;
