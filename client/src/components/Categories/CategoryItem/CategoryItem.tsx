import * as React from "react";
import { format } from "date-fns";
import Paper from "@mui/material/Paper";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { categoryItemStyles } from "./categoryItemStyles";
import CategoryActions from "../CategoryActions/CategoryActions";
import { IResponseOneCategoryData } from "../../../types/types";

const DemoPaper = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
}));

const CategoryItem: React.FC<IResponseOneCategoryData> = ({ id, dateCreated, name, tasks  }) => {
  const [isActionsShown, setIsActionsShown] = React.useState<boolean>(false);
  const [categoryId, setCategoryId] = React.useState<number | null>(null);

  const handleActionsClick = (
    //   event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    // Зупиняємо спливання події до батьківського компонента
    //   event.stopPropagation();
    setIsActionsShown(true);
    setCategoryId(id);
  };

  const handleActionsClose = () => {
    setIsActionsShown(false);
  };

  const formedDate = format(new Date(dateCreated), "dd.MM.yyyy");
  
  return (
    <ListItem>
      <DemoPaper variant="outlined" sx={categoryItemStyles.paper}>
        <Box sx={categoryItemStyles.textWrapper}>
          <Typography
            variant="h5"
            display="block"
            sx={{ textTransform: "uppercase", minWidth: "140px" }}
          >
            {name}
          </Typography>
          <Typography variant="h6">{tasks.length} tasks</Typography>
          <Typography variant="h6">{formedDate}</Typography>
        </Box>
        <Box sx={categoryItemStyles.buttonsWrapper}>
          <Button size="small" onClick={() => handleActionsClick(id)}>
            actions
          </Button>
          <Button size="small">more </Button>
          {isActionsShown && categoryId !== null && (
            <CategoryActions
              categoryId={categoryId}
              handleActionsClose={handleActionsClose}
            />
          )}
        </Box>
      </DemoPaper>
    </ListItem>
  );
};

export default CategoryItem;
