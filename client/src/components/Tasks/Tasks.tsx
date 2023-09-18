import { FC, useEffect } from "react";
import { useSearchParams, Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/hooks";
import { selectCategoryById } from "../../redux/categories/categoriesSelectors";
import { fetchUserTasks } from "../../redux/task/tasksOperations";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TasksList from "./TasksList/TasksList";


const Tasks: FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const [searchParams] = useSearchParams();
  const categoryIdParams = searchParams.get("categoryId");

  const categoryById = useSelector(selectCategoryById);

  useEffect(() => {
    if (categoryIdParams) {
      dispatch(fetchUserTasks(+categoryIdParams));
    }
  }, [categoryIdParams, dispatch]);

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ p: 2, display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" sx={{ textTransform: "uppercase" }}>
          {categoryById.name}
        </Typography>
        <Button
          variant="contained"
          sx={{ marginRight: 2 }}
          component={Link}
          to={`/task`}
          state={{ from: location, categoryId: categoryIdParams }}
        >
          Add task
        </Button>
      </Box>
      <TasksList />
    </Box>
  );
};

export default Tasks;
