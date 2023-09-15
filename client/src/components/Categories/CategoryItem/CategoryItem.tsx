import * as React from "react";
import Paper from "@mui/material/Paper";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { categoryItemStyles } from "./categoryItemStyles";
import CategoryActions from "../CategoryActions/CategoryActions";

const DemoPaper = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
}));

const CategoryItem: React.FC<{ key: number }> = ({ key }) => {
  const [isActionsShown, setIsActionsShown] = React.useState<boolean>(false);
  const [categoryId, setCategoryId] = React.useState<number | null>(null);
  const handleActionsClick = (
    //   event: React.MouseEvent<HTMLButtonElement>,
    it: number
  ) => {
    // Зупиняємо спливання події до батьківського компонента
    //   event.stopPropagation();
    setIsActionsShown(true);
    setCategoryId(it);
    console.log("Клікнуто дитячий компонент");
  };
  return (
    <ListItem>
      <DemoPaper variant="outlined" sx={categoryItemStyles.paper}>
        <Box sx={categoryItemStyles.textWrapper}>
          <Typography variant="h5">Category</Typography>
          <Typography variant="h6">5 tasks</Typography>
          <Typography variant="h6">Date</Typography>
        </Box>
        <Box sx={categoryItemStyles.buttonsWrapper}>
          <Button size="small" onClick={() => handleActionsClick(key)}>
            actions
          </Button>
          <Button size="small">more </Button>
          {isActionsShown && key === categoryId && <CategoryActions />}
        </Box>
      </DemoPaper>
    </ListItem>
  );
};

export default CategoryItem;
