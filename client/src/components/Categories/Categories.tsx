import { FC } from "react";
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import CategoryList from "./CategoryList/CategoryList";


const Categories: FC = () => {
    return (
      <Box sx={{ p: 2, textAlign: "end"}}>
        <Button
          variant="contained"
                sx={{ marginBottom: 4, marginRight: 2 }}
        >
          Add category
        </Button>
        <CategoryList />
      </Box>
    );
};

export default Categories;
