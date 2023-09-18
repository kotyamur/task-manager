import { FC } from "react";
import { useSelector } from "react-redux";
import { selectCategoryTasksById } from "../../../redux/categories/categoriesSelectors";

import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import TaskItem from "../TaskItem/TaskItem";
import Typography from "@mui/material/Typography";

const TasksList: FC = () => {
  const tasks = useSelector(selectCategoryTasksById);
  console.log(tasks)
  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        component={List}
      >
        {tasks.map((it) => {
          return <TaskItem key={it} it={it} />;
        })}
      </Grid>
      {tasks.length === 0 && (
        <Typography variant="h6" mt={4} sx={{ color: "primary.dark", textAlign: "center" }}>
          Add your first task in this category
        </Typography>
      )}
    </>
  );
};

export default TasksList;
