import React from "react";
import { Link } from "react-router-dom";
import { useRecipeContext } from "../context/context";

const Navbar = () => {
  const { favourites, setSearch, search } = useRecipeContext();

  return (
    <div className="navbar">
      <div className="logo">
        <Link to={"/"}>FoodReceipe</Link>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Enter something to search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
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
