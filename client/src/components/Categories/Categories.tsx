import React, { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/user/authSelectors";

import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import CategoryList from "./CategoryList/CategoryList";
import CategoryAddPopup from "./CategoryAddPopup/CategoryAddPopup";

const Categories: FC = () => {
  const navigate = useNavigate();
  const isUserLogined = useSelector(selectIsLoggedIn)
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

  useEffect(() => {
    if (!isUserLogined) {
      navigate("/login");
    }
  }, [isUserLogined, navigate]);

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
            setOpenAddPopup={setOpenAddPopup}
          />
        )}
      </Box>
    );
};

export default Categories;
