import React from "react";
import MenuItem from "./MenuItem";

const MenuList = ({ recipes }) => {
  return (
    <div className="menu-container">
      {recipes?.map((recipe) => (
        <MenuItem key={recipe.id} {...recipe} />
      ))}
    </div>
  );
};

export default MenuList;
