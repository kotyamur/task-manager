import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { formatISO } from "date-fns";
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

  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [startDate, setStartDate] = React.useState<dateFns | null>(null);
  const [endDate, setEndDate] = React.useState<dateFns | null>(null);
  console.log(startDate, endDate);
    if (startDate instanceof Date) {
      console.log(formatISO(startDate));
  };
  
  
  console.log(location.state.from);
  const backLink = location.state.from ?? "/categories";

  return (
    <Box sx={taskStyles.formWrapper}>
      <Box component="form" sx={taskStyles.form} noValidate autoComplete="off">
        <TextField
          fullWidth
          // sx={{  mb: 1 }}
          label="Name:"
          value={name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value);
          }}
        />
        <TextField
          fullWidth
          // sx={{ width: "35ch" }}
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
          <Button variant="contained">save</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Task;
