import * as React from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/task/tasksSelectors";
import { useAppDispatch } from "../../redux/hooks";
import { fetchTaskById } from "../../redux/task/tasksOperations";

import Box from "@mui/material/Box";
import TaskForm from "./TaskForm/TaskForm";
import { taskStyles } from "./taskStyles";

const Task: React.FC = () => {
  const dispatch = useAppDispatch();

  const [searchParams] = useSearchParams();
  const taskIdParams = searchParams.get("taskId");

  React.useEffect(() => {
    if (taskIdParams) {
      dispatch(fetchTaskById(+taskIdParams));
    }
  }, [taskIdParams, dispatch]);

  const isLoading = useSelector(selectIsLoading);

  return (
    <Box sx={taskStyles.formWrapper}>
        {!isLoading && (
          <TaskForm />
        )}
    </Box>
  );
};

export default Task;
