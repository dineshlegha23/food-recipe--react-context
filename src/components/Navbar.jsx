import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecipeContext } from "../context/context";

const Navbar = () => {
  const { favourites, setSearch, search } = useRecipeContext();
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(searchText);
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="logo">
        <Link to={"/"}>FoodReceipe</Link>
      </div>
      <div className="search">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter something to search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </form>
      </div>
      <ul className="nav-links">
        <li className="link">
          <Link to="/favourites">
            Favourites {favourites.length > 0 ? favourites.length : ""}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
