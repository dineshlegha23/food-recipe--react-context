import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecipeContext } from "../context/context";

const Recipe = () => {
  const { setFavourites, favourites } = useRecipeContext();
  const params = useParams();
  const [recipe, setRecipe] = useState([]);
  const [added, setAdded] = useState(
    favourites?.find((item) => item.id === params.id)
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${params.id}`
      );
      const data = await response.json();
      setRecipe(data.data.recipe);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const handleFavouriteBtn = (recipe) => {
    !added
      ? setFavourites((prev) => [
          ...prev,
          {
            id: params.id,
            title: recipe.title,
            image_url: recipe.image_url,
            publisher: recipe.publisher,
          },
        ])
      : setFavourites((prev) =>
          prev.filter((recipe) => recipe.id !== params.id)
        );
    setAdded(!added);
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: Something went wrong</div>;
  }

  return (
    <div className="recipe">
      <div className="image">
        <img src={recipe?.image_url} alt={recipe?.title} />
      </div>
      <div className="recipe-details">
        <p className="publisher">{recipe?.publisher}</p>
        <h2>{recipe?.title}</h2>
        <button
          className="favourite-btn"
          onClick={() => handleFavouriteBtn(recipe)}
        >
          {added ? "REMOVE FROM FAVOURITE" : "ADD TO FAVOURITES"}
        </button>
        <div>
          Ingredients:
          <ul className="ingredients">
            {recipe?.ingredients?.map((ingredient, index) => (
              <li key={index}>
                {ingredient.quantity} {ingredient?.unit}
                {ingredient?.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
0;
