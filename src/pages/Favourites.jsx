import React from "react";
import MenuList from "../components/MenuList";
import { useRecipeContext } from "../context/context";

const Favourites = () => {
  const { favourites } = useRecipeContext();

  return (
    <div>
      <MenuList recipes={favourites} />
    </div>
  );
};

export default Favourites;
