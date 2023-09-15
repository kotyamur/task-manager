import { FC } from "react";
import List from "@mui/material/List";
import CategoryItem from "../CategoryItem/CategoryItem";

const CategoryList: FC = () => {
  return (
    <List>
      {[0, 1, 2, 3, 4].map((it) => {
        return <CategoryItem key={it} />;
      })}
    </List>
  );
};

export default CategoryList;
