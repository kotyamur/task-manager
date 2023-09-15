import * as React from "react";
// import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Task: React.FC = () => {
    const [name, setName] = React.useState("");

    const [description, setDescription] = React.useState("");

  return (
    <Box
      sx={{
        width: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "30ch" },
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Name:"
          value={name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value);
          }}
        />
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          value={description}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setDescription(event.target.value);
          }}
        />
        <Box sx={{ display: "flex", gap: 6, justifyContent: "center", mt: 3 }}>
          <Typography variant="body1">start date</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 6, justifyContent: "center", mt: 3 }}>
          <Typography variant="body1">end date</Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 6, justifyContent: "center", mt: 3 }}>
          <Button variant="outlined">cancel</Button>
          <Button variant="contained">save</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Task;
