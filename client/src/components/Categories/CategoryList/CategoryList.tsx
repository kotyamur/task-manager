import { FC } from "react";
import List from "@mui/material/List";
import CategoryItem from "../CategoryItem/CategoryItem";

const CategoryList: FC = () => {
  return (
    <List>
      <CategoryItem />
    </List>
  );
};

export default CategoryList;
