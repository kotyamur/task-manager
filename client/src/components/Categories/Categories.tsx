import { FC, useState } from "react";
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import CategoryList from "./CategoryList/CategoryList";
import CategoryAddPopup from "./CategoryAddPopup/CategoryAddPopup";


const Categories: FC = () => {
  const [openAddPopup, setOpenAddPopup] = useState(false);
  const handleAddActionClick = () => {
    setOpenAddPopup(true);
  };
  const handleCloseAddPopup = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.target === event.currentTarget) {
      //   event.stopPropagation();
      setOpenAddPopup(false);
    }
  };
    return (
      <Box sx={{ p: 2, textAlign: "end" }}>
        <Button
          variant="contained"
          sx={{ marginBottom: 4, marginRight: 2 }}
          onClick={handleAddActionClick}
        >
          Add category
        </Button>
        <CategoryList />
        {openAddPopup && (
          <CategoryAddPopup
            open={openAddPopup}
            handleClose={handleCloseAddPopup}
          />
        )}
      </Box>
    );
};

export default Categories;
