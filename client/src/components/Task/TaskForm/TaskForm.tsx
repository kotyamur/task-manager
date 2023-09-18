import * as React from "react";
import {
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { formatISO, toDate } from "date-fns";

import { useAppDispatch } from "../../../redux/hooks";
import { addTask, editTask } from "../../../redux/task/tasksOperations";
import { useSelector } from "react-redux";
import { selectTaskById } from "../../../redux/task/tasksSelectors";
import { clearTaskById } from "../../../redux/task/tasksSlice";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { taskFormStyles } from "./taskFormStyles";

const TaskForm: React.FC = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const taskById = useSelector(selectTaskById);
  const { name, description, dateStart, dateEnd, id } = taskById;
  const dateStartFormated = new Date(dateStart) || null;
  const dateEndFormated = new Date(dateEnd) || null;

  const [searchParams] = useSearchParams();
  const taskIdParams = searchParams.get("taskId");
  
  const [nameTask, setNameTask] = React.useState(name ?? "");
  const [descriptionTask, setDescriptionTask] = React.useState(description ?? "");
  const [startDateTask, setStartDateTask] = React.useState<
    Date | number | null
  >(dateStartFormated ?? toDate(new Date()));
  const [endDateTask, setEndDateTask] = React.useState<Date | number | null>(
    dateEndFormated ?? toDate(new Date())
    );
    
  const backLink = location.state.from ?? "/categories";
  const categoryId = location.state.categoryId;

  const resetForm = () => {
    setNameTask("");
    setDescriptionTask("");
    setStartDateTask(null);
    setEndDateTask(null);
  };

  const clearAndNavigateToBack = () => {
    resetForm();
    dispatch(clearTaskById());
    navigate(backLink);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const newTask = {
      name: nameTask,
      dateStart: startDateTask ? formatISO(startDateTask) : formatISO(new Date()),
      dateEnd: endDateTask ? formatISO(endDateTask) : formatISO(new Date()),
      category_id: +categoryId,
      description: descriptionTask,
    };
    const taskToEdit = {
      task: {
        name: nameTask,
        dateStart: startDateTask  ? formatISO(startDateTask)  : formatISO(new Date()),
        dateEnd: endDateTask ? formatISO(endDateTask) : formatISO(new Date()),
        description: descriptionTask,
      },
      id: +id,
    };
    if (taskIdParams) {
      await dispatch(editTask(taskToEdit));
    }
    if (categoryId) {
      await dispatch(addTask(newTask));
    }
    clearAndNavigateToBack();
  };

  return (
        <Box
          component="form"
          sx={taskFormStyles.form}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            fullWidth
            label="Name:"
            value={nameTask}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setNameTask(event.target.value);
            }}
            required
            error={nameTask === ""}
            helperText={nameTask === "" ? "Name is required" : ""}
          />
          <TextField
            fullWidth
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            value={descriptionTask}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setDescriptionTask(event.target.value);
            }}
          />
          <Box sx={taskFormStyles.date}>
            <Typography variant="body1" sx={{ width: "80px" }}>
              start date
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                sx={{
                  width: "170px",
                }}
                value={startDateTask}
                onChange={(newValue) => setStartDateTask(newValue)}
              />
            </LocalizationProvider>
          </Box>
          <Box sx={taskFormStyles.date}>
            <Typography variant="body1" sx={{ width: "80px" }}>
              end date
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                sx={{
                  width: "170px",
                }}
                value={endDateTask}
                onChange={(newValue) => setEndDateTask(newValue)}
                minDate={startDateTask}
              />
            </LocalizationProvider>
          </Box>

          <Box sx={{ display: "flex", gap: 13, mt: 3 }}>
            <Button variant="outlined" onClick={clearAndNavigateToBack}>
              {/* <Button variant="outlined" component={Link} to={backLink}> */}
              cancel
            </Button>
            <Button variant="contained" type="submit">
              save
            </Button>
          </Box>
        </Box>
  );
};

export default TaskForm;
