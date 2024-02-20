import { createContext, useContext, useState } from "react";

const RecipeContext = createContext();

const items = JSON.parse(localStorage.getItem("favourites"));

export const ContextProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("banana");
  const [favourites, setFavourites] = useState(items ? items : []);

  return (
    <RecipeContext.Provider
      value={{
        recipes,
        setRecipes,
        search,
        setSearch,
        favourites,
        setFavourites,
        items,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipeContext = () => {
  return useContext(RecipeContext);
};
