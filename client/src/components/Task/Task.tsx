import * as React from "react";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { formatISO } from "date-fns";

import { useAppDispatch } from "../../redux/hooks";
import { addTask } from "../../redux/task/tasksOperations";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { taskStyles } from "./taskStyles";

const Task: React.FC = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const taskIdParams = searchParams.get("taskId");
  console.log(taskIdParams);

  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [startDate, setStartDate] = React.useState<Date | number | null>(new Date());
  const [endDate, setEndDate] = React.useState<Date | number | null>(new Date());

  console.log(location.state.from);
  const backLink = location.state.from ?? "/categories";

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // const formatStartDate = formatISO(dateStart);
    const newTask = {
      name: name,
      dateStart: startDate ? formatISO(startDate) : formatISO(new Date()),
      dateEnd: endDate ? formatISO(endDate) : formatISO(new Date()),
      category_id: +location.state.categoryId,
      description: description,
    };
    console.log(newTask);
    await dispatch(addTask(newTask));
    navigate(backLink);
  };


  

  return (
    <Box sx={taskStyles.formWrapper}>
      <Box
        component="form"
        sx={taskStyles.form}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          fullWidth
          label="Name:"
          value={name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value);
          }}
          required
          error={name === ""}
          helperText={name === "" ? "Name is required" :''}
        />
        <TextField
          fullWidth
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          value={description}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setDescription(event.target.value);
          }}
        />
        <Box sx={taskStyles.date}>
          <Typography variant="body1" sx={{ width: "80px" }}>
            start date
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              sx={{
                width: "170px",
              }}
              value={startDate}
              onChange={(newValue) => setStartDate(newValue)}
            />
          </LocalizationProvider>
        </Box>
        <Box sx={taskStyles.date}>
          <Typography variant="body1" sx={{ width: "80px" }}>
            end date
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              sx={{
                width: "170px",
              }}
              value={endDate}
              onChange={(newValue) => setEndDate(newValue)}
              minDate={startDate}
            />
          </LocalizationProvider>
        </Box>

        <Box sx={{ display: "flex", gap: 13, mt: 3 }}>
          <Button variant="outlined" component={Link} to={backLink}>
            cancel
          </Button>
          <Button variant="contained" type="submit">
            save
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Task;
