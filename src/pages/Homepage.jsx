import React, { useState, useEffect } from "react";
import MenuList from "../components/MenuList";
import { useNavigate } from "react-router-dom";
import { useRecipeContext } from "../context/context";

const Homepage = () => {
  const { recipes, setRecipes, search } = useRecipeContext();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`
      );
      const data = await response.json();
      setRecipes(data.data.recipes);
      navigate("/");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: Something went wrong</div>;
  }

  return (
    <>
      {recipes.length > 0 ? (
        <MenuList recipes={recipes} />
      ) : (
        <div className="empty">Sorry, no items match your search</div>
      )}
    </>
  );
};

export default Homepage;
