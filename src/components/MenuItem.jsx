import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ image_url, title, id, publisher }) => {
  return (
    <section className="menu-item">
      <div className="image">
        <img src={image_url} alt={title} />
      </div>
      <div className="publisher">
        <p>{publisher}</p>
      </div>
      <div className="title">{title}</div>
      <button className="recipe-detail-btn">
        <Link to={`/recipe/${id}`}>RECIPE DETAILS</Link>
      </button>
    </section>
  );
};

export default MenuItem;
